import { createConnection } from "mysql2";

export function createDBConnection () {
    const conn = createConnection({
        host:"localhost",
        user:"root",
        password:"cdac",
        database:"wpt"
    });
    conn.connect((error) => {
        if(error){
            console.log(error);
        } else {
            console.log("DB Connected");
        }
    });
    return conn;
}