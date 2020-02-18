import * as mongoose from "mongoose";
import { Schema } from 'mongoose';
import IList from "../Interfaces/List&Task-Interfaces"
import ITask from "../Interfaces/List&Task-Interfaces"

const listSchema: Schema = new Schema({
    name: { type: String, unique: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
})

const taskSchema: Schema = new Schema({
    text: String,
    isDone: Boolean,
    tag: String,
})

export const Task = mongoose.model<ITask>('Task', taskSchema);
export const List = mongoose.model<IList>('List', listSchema);