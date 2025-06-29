
import express, {Express} from 'express';
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser } from 'controllers/user.controller';
const router = express.Router();


const webRoutes = (app : Express) => {

    router.get("/",getHomePage);
    router.get("/create-user",getCreateUserPage);

    router.post("/handle-create-user",postCreateUser);
    router.post("/handle-delete-user/:id",postDeleteUser);

    app.use('/', router);
}

export default webRoutes;       
// module này xuất mặc định biến webRoutes ra ngoài để các module khác có thể import và sử dụng.