import getConnection from "../config/database";

const handleCreateUser = async (
    fullname : string,
    email : string,
    address : string ) => {

        // insert into database
        const connection = await getConnection();
            try {
                const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?,?)';
                const values = [fullname,email,address];
                const [result, fields] = await (await connection).execute(sql, values);

            return result;
            } catch (err) {
            console.log(err);
            return [];
            }

        // return result
        console.log(">>> insert a new user")
}
const handleDeleteUser = async (id: string) => {
    const connection = getConnection();
    try {
  const sql = 'DELETE FROM `users` WHERE `id` = ? ';
  const values = [id];

  const [result, fields] = await (await connection).query(sql,values);

  return result
} catch (err) {
  console.log(err);
  return []
}
}
const getAllUsers = async () => {
    const connection = getConnection();
    // A simple SELECT query
    try {
    const [results, fields] = await (await connection).query(
        'SELECT * FROM `users` '
    );

    return results;
    } catch (err) {
    console.log(err);
    return [];
    }
   
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