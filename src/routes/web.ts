
import express, {Express} from 'express';

const router = express.Router();


const webRoutes = (app : Express) => {

    router.get("/",(req,res) => {

        res.render("home.ejs")
    })
    router.get("/anhtai",(req,res) => {

        res.send("Hello Tai") 
    })   


    app.use('/', router);
}

export default webRoutes;       
// module này xuất mặc định biến webRoutes ra ngoài để các module khác có thể import và sử dụng.