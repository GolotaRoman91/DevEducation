import './style.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Chart, registerables } from '../node_modules/chart.js';
Chart.register(...registerables);
import axios from '../node_modules/axios';
require('babel-core/register');
require('babel-polyfill');

const select = document.querySelector('.select') as HTMLInputElement;
const popupCanvas: any = document.getElementById('myChart');
select.addEventListener('change', validateValue);
let URL = 'http://localhost:3005/get-data-germany';
let resultArray: any = [];
let config: any;
let barChart: any = new Chart(document.getElementById('myChart') as any, config as any);

function validateValue(): void {
    console.log(select.value);
    if (select.value === 'Estonia') {
        URL = 'http://localhost:3005/get-data-estonia';
        getData(URL);
    } else if (select.value === 'Polan') {
        URL = 'http://localhost:3005/get-data-poland';
        getData(URL);
    } else if (select.value === 'Netherlands') {
        URL = 'http://localhost:3005/get-data-netherlands';
        getData(URL);
    } else if (select.value === 'Canada') {
        URL = 'http://localhost:3005/get-data-canada';
        getData(URL);
    }
}

const getData: any = async (URL: string) => {
    try {
        resultArray.length = 0;
        const data = await axios.get(URL);
        await resultArray.push(Object.values(data.data.histogram));
        renderData(resultArray);
    } catch (error) {
        console.error(error);
    }
};

async function renderData(resultArray: Array<number>) {
    barChart.destroy();
    barChart = new Chart(popupCanvas, {
        type: 'line',
        data: {
            labels: ['10K-20K', '20K-30K', '30K-40K', '40K-50K', '50K-60K', '60K-70K', '70K+'],
            datasets: [
                {
                    label: 'Vacancies ',
                    data: resultArray[0],
                    fill: false,
                    borderColor: 'green',
                    tension: 0.1
                },
            ],
        },
    });
}

getData(URL);
