import { AppDataSouce } from "../db";
import { TodoEntity } from "../entities"; // Import TodoEntity
import { UserEntity } from "../entities";



export const createTodo = async (data: { title: string; description?: string; dueDate?: Date; user: UserEntity; }) => {
  try {
    const todoRepository = AppDataSouce.getRepository(TodoEntity);

    // Create a new Todo entity with just the user ID
    const newTodo = new TodoEntity();
    newTodo.title = data.title;
    newTodo.description = data.description;
    newTodo.dueDate = data.dueDate;
    newTodo.user = data.user.uuid;
    

    await todoRepository.save(newTodo);
    return newTodo;
  } catch (error: any) {
    console.error("Error creating todo:", error);
    throw new Error(error);
  }
};

export const getTodos = async (user: UserEntity) => {
  try {
    console.log(user)
    const todoRepository = AppDataSouce.getRepository(TodoEntity);
    const todos = await todoRepository.find({
      where: { user :{ uuid: user.uuid } }, 
    });
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error); 
    throw new Error("Failed to fetch todos.");
  }
};