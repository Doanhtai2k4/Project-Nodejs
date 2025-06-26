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