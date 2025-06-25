
import { Request,Response } from "express"
import { handleCreateUser } from "../services/user.service"

const getHomePage = (req: Request,res: Response) => {
    return res.render("home.ejs")
}
const getCreateUserPage = (req: Request,res: Response) => {
    return res.render("create-user")
}
const postCreateUser = (req: Request,res: Response) => {
    // console.log(">>> check data:",req.body)

    const {fullname,email,address} = req.body;
    // console.log("check fullname: ",fullname);
    // console.log("check email: ",email);

        // handle create user
    handleCreateUser(fullname,email,address);


    return res.redirect("/");
}

export {getHomePage,getCreateUserPage,postCreateUser};