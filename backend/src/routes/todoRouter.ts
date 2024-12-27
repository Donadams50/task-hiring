import { Router } from "express";
import { TodoValidator } from "../validators";
import { checkAuth } from "../utils/checkAuth";
import {  TodoController } from "../controllers"; // Assuming these are in separate files

export const todoRouter = Router();

// Route to create a new todo item
todoRouter.post("/", TodoValidator.createTodoValidator(), checkAuth, TodoController.createTodoController );

// Route to get all todo items for the current user
todoRouter.get("/", checkAuth,  TodoController.getTodosController);

// // Route to get a specific todo item by ID
// todoRouter.get("/todos/:id", TodoValidator.getTodoByIdValidator(), TodoController.getTodoByIdController);

// // Route to update a specific todo item
// todoRouter.put("/todos/:id", TodoValidator.updateTodoValidator(), TodoController.updateTodoController);

// // Route to delete a specific todo item
// todoRouter.delete("/todos/:id", TodoValidator.deleteTodoValidator(), TodoController.deleteTodoController);