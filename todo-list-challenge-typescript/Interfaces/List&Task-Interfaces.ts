import * as mongoose from "mongoose";

export default interface ITask extends mongoose.Document {
    text: string,
    isDone: boolean,
    tag?: string,
}
export default interface IList extends mongoose.Document {
    name: string,
    tasks?: Array<ITask['_id']>
}