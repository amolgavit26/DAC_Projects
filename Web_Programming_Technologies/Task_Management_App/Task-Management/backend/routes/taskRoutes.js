import express from "express";
import { createDBConnection } from "../src/config/config.js";
import { StatusCodes } from "http-status-codes";
import cors from "cors";
const router = express.Router();
const conn = createDBConnection();

router.use(cors());

// Home Page
router.get("/", (request, response) => {
    response.status(StatusCodes.OK).send({ massage: "Welcome to Taks Managment App." })
});


// Create Tasks:
router.post("/task-add", (request, response) => {
    try {
        const data = request.body;
        const query = `insert into tasks (id, title, description, priority, due_date, complete)
                        values ( ${data.id}, "${data.title}", "${data.description}", "${data.priority}", "${data.due_date}", ${data.complete})`;
        conn.query(query, (error, result) => {
            if (error) {
                if (error.errno == 1062) {
                    response.status(StatusCodes.BAD_REQUEST).send({ message: "ID already Exist" });
                } else {
                    console.log(error);
                    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Problem while inserting task" });
                }
            } else {
                response.status(StatusCodes.OK).send({ message: "Task added Successfully" });
            }
        });
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Internal Error" });
    }
});






// Read Tasks:
router.get("/task-list", (request, response) => {
    try {
        const query = `select * from tasks`;
        conn.query(query, (error, result) => {
            if (error) {
                response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Problem while reading tasks" });

            } else {
                response.status(StatusCodes.OK).send(result);
            }
        });
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Internal Error" });
    }
});



// Get Task by ID:
router.get("/task-edit/:id", (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const query = `select * from tasks where id=${id}`;
        conn.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Problem while retrieving task" });
            } else {
                response.status(StatusCodes.OK).send(result);
            }
        });
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Internal Error" });
    }
});





// Update Tasks:
router.put("/task-edit/:id", (request, response) => {
    try {
        console.log("Incoming data to update:", request.body); 

        const id = parseInt(request.params.id);
        const data = request.body;

        const completeValue =
            data.complete === true ||
            data.complete === "true" ||
            data.complete === 1 ||
            data.complete === "1"
                ? 1
                : 0;

        const query = `update tasks set 
            title="${data.title}",
            description="${data.description}",
            priority="${data.priority}",
            due_date="${data.due_date}",
            complete=${completeValue}
            where id=${id}`;

        conn.query(query, (error, result) => {
            if (error) {
                console.log(error); 
                response
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .send({ message: "Problem while updating tasks" });
            } else {
                response
                    .status(StatusCodes.OK)
                    .send({ message: "Task Updated Successfully" });
            }
        });
    } catch (error) {
        console.log(error); 
        response
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ message: "Internal Error" });
    }
});






// Delete Tasks:
router.delete("/task-delete/:id", (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const query = `delete from tasks where id=${id}`;
        conn.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Problem while deleting tasks" });
            } else {
                response.status(StatusCodes.OK).send({ message: "Task delete Successfully" });
            }
        });
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Internal Error" });
    }
});





export default router;



