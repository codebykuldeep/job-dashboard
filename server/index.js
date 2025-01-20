import express from 'express';
import constant from './constant.js';
import { connectDb } from './db/initDb.js';
import db from './db/db.js';
import { logger } from './middleware/utils middleware.js';
import cors from 'cors';



//ROUTES IMPORT
import commonRouter from './routes/common.js'
import employersRouter from './routes/employers.js'
import userRouter from './routes/users.js'


const app = express();
const PORT  = constant.PORT || 8000 ;

const corsOptions ={
    origin:'*',
    exposedHeaders:['Content-Type','Authorization']
}

app.use(cors(corsOptions));
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.use('/',commonRouter);
app.use('/users',userRouter);
app.use('/employers',employersRouter);


app.get('/',async (req,res)=>{
    const data = await db.query('SELECT * FROM employers;')
    return res.json({data:data});
})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT ${PORT}`);
    connectDb()
})
