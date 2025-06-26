
import { Request,Response } from "express"
import { getAllUsers, handleCreateUser } from "../services/user.service"
import { name } from "ejs";

const getHomePage = async (req: Request,res: Response) => {
    // get users
    const users = await getAllUsers();
    console.log("Check user : ", users);
    // x -< y 
    return res.render("home.ejs", {
        name: users
    });
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