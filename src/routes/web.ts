
import express, {Express} from 'express';
import { getHomePage, getCreateUserPage } from '../controllers/user.controller';
const router = express.Router();


const webRoutes = (app : Express) => {

    router.get("/",getHomePage);

     router.get("/create-user",getCreateUserPage);


    app.use('/', router);
}

export default webRoutes;       
// module này xuất mặc định biến webRoutes ra ngoài để các module khác có thể import và sử dụng.