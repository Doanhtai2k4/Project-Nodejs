
import { Request,Response } from "express"
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service"
import { name } from "ejs";

const getHomePage = async (req: Request,res: Response) => {
    // get users
    const users =  await getAllUsers();
  
    // x -< y 
    return res.render("home.ejs", {
        users: users
    });
}
const getCreateUserPage = (req: Request,res: Response) => {
    return res.render("create-user")
}
const postCreateUser = async (req: Request,res: Response) => {
    // console.log(">>> check data:",req.body)

    const {fullname,email,address} = req.body;
    // console.log("check fullname: ",fullname);
    // console.log("check email: ",email);

        // handle create user
    const a =await handleCreateUser(fullname,email,address);

    return res.redirect("/");
}
const postDeleteUser = async (req: Request,res: Response) => {
  
    const {id}= req.params ;
    await handleDeleteUser(id);
    return res.redirect("/");
}
const getViewUser = async (req: Request,res: Response) => {
    const {id}= req.params ;
    //get user by id
    const user = await getUserById(id);
    return res.render("view-user",{
        id: id,
        user: user

    });
}
const postUpdateUser = async (req: Request,res: Response) => {
    const {id,email,address,fullname}= req.body ;
    //get user by id
   await updateUserById(id,email,address,fullname);
    return res.redirect("/");
}
    

export {getHomePage,getCreateUserPage,postCreateUser,postDeleteUser,getViewUser,getUserById,postUpdateUser};