import { prisma } from "config/client";
import getConnection from "../config/database";

const handleCreateUser = async (
    fullname : string,
    email : string,
    address : string ) => {

       
      
     const newUser= await prisma.user.create({
        data: {
          name: fullname,
          email: email,
          address: address
        }
       })
       return newUser;
}
const handleDeleteUser = async (id: string) => {
    const connection = getConnection();
    try {
  const sql = 'DELETE FROM `user` WHERE `id` = ? ';
  const values = [id];

  const [result, fields] = await (await connection).query(sql,values);

  return result
} catch (err) {
  console.log(err);
  return []
}
}
const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users;
}
const getUserById = async (id: string) => {
    const connection = getConnection();
    try {
  const sql = 'SELECT * FROM `users` WHERE `id` = ? ';
  const values = [id];

  const [result, fields] = await (await connection).query(sql,values);

  return result[0];
} catch (err) {
  console.log(err);
  return []
}

}
const updateUserById = async (id: string,fullname:string,email:string,address:string) => {
    const connection = getConnection();
    try {
  const sql = 'UPDATE `users` SET `name` = ?,`email` = ?,`address` = ? WHERE `id` = ? ';
  const values = [fullname,email,address,id];

  const [result, fields] = await (await connection).query(sql,values);

  return result;
} catch (err) {
  console.log(err);
  return []
}

}

export {handleCreateUser,getAllUsers,handleDeleteUser,getUserById,updateUserById}