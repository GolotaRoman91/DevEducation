const db = require('../db');

class CustomError {
    constructor(message, status) {
        this.message = message;
        this.name = "CustomError";
        this.status = status;
    }
    stack = () => {
        this.constructor;
    };
}

const getFactorialByRecursion = (number) => {
    let getFactorial = (number) => number ? number * getFactorial(number - 1) : 1;

    let start = new Date().getTime();
    let count = getFactorial(number);
        const end = new Date().getTime();
        const time = end - start;
        return { count, time };
}

const getFactorialByCycle = (number) => {
    
    let start = new Date().getTime();
    let count = number;

    while (number !== 1) {
        count *= (number - 1);
        number--;
    }
    const end = new Date().getTime();
    const time = end - start;
    return { count, time };
}; 

class UserController {
    async createUser(req,res) {
        const {name, surname} = req.body;
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name,surname]);
        res.json(newPerson.rows[0]);
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person');
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id]);
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const user = await db.query(
            'UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',
            [name, surname, id]
        )
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    async getError(req,res) {
        const error = new CustomError();
        res.json(error)
    }
    async calculateFactorial(req, res) {
        const {num, type} = req.body;
        const facRec = {
            result: getFactorialByRecursion(num)
        }
        const facCycle = {
            result: getFactorialByCycle(num)
        };

        if (type === 'cycle') {
            res.json(facCycle);
        } else if (type === 'recursion') {
            res.json(facRec);
        }
    }
}

module.exports = new UserController();
