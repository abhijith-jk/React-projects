import mongoose from "mongoose";

const tasksSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    taskDescription: {
      type: String,
      required: true,
    },
    taskCompletionDate: {
      type: Date,
    },
    taskPriority: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", tasksSchema);
export default Tasks;
