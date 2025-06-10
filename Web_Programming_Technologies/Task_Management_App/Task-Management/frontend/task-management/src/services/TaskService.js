
import axios from "axios";

export function fetchAllTasks() {
    return axios.get("http://localhost:6200/task-list");
}



export function addTask(taskData) {
    return axios.post("http://localhost:6200/task-add", taskData);
}


export function deleteTask(id) {
    return axios.delete(`http://localhost:6200/task-delete/${id}`);
}


export const fetchTaskById = (id) => {
    return axios.get(`http://localhost:6200/task-edit/${id}`);
};


export const updateTask  = (id, data) => {
    return axios.put(`http://localhost:6200/task-edit/${id}`, data);
};