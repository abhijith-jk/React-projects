import mongoose from "mongoose";
import Tasks from "../models/tasksModel";

export const readTodos = async (req, res) => {
  try {
    const Todos = await Tasks.find();
    res.status(200).json(Todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTodos = async (req, res) => {
  const todo = new Tasks(req.body);
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
