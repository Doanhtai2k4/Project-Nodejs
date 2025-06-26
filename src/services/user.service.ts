import getConnection from "../config/database";

const handleCreateUser = (
    fullname : string,
    email : string,
    address : string ) => {

        // insert into database


        // return result
        console.log(">>> insert a new user")
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
export {handleCreateUser,getAllUsers}