const express = require('express');
const userRouter = require('./routes/user.routes')
const PORT = 3001;
const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));



