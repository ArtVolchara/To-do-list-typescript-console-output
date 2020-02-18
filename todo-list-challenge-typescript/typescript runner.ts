import * as mongoose from "mongoose";

import ITask from "./Interfaces/List&Task-Interfaces"

import { List, Task } from "./ShemasAndModels/List&Task-Shema+model"

mongoose.connect("mongodb://localhost/MyToDoList", { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

function getTaskText(): string {
    const newArray: Array<any> = [...process.argv].filter((el, i) => i > 4);
    return newArray.join(' ');
}

async function createTask(taskName: string): Promise<ITask> {
    try {
        const task: ITask = new Task({ text: taskName, isDone: false })
        await task.save()
        return task;
    } catch (error) {
        console.log("create task error", error)
    }
}

async function addTask(listName: string, taskName: string, taskNumber: number): Promise<void> {
    try {
        const newTask = await createTask(taskName);
        console.log(newTask);
        const list = await List.findOne({ name: listName })
        if (list) {
            list.tasks.splice(taskNumber, 0, newTask)
            await list.save()
        } else {
            const list = new List({ name: listName, tasks: [] })
            list.tasks.splice(taskNumber, 0, newTask)
            await list.save()
        }
    } catch (error) {
        console.log("error in addTsk fucntion:", error);
    }
    mongoose.connection.close()
}

async function deleteTask(listName: string, taskNumber: number): Promise<void> {
    try {
        const list = await List.findOne({ name: listName })
        if (list) {
            if (list.tasks.length === 0) {
                console.log('Список задач пуст, нечего удалять');
            } else {
                const deletedTaskName = list.tasks.splice(taskNumber, 1)[0].text
                await list.save()
                await Task.deleteOne({ text: deletedTaskName })
            }
        } else {
            console.log("Нет такого списка в котором вы хотите удалить задачу");
        }
    } catch (error) {
        console.log("Некорректный номер задачи для удаления");
        console.log(error);
    }
    mongoose.connection.close()
}

async function addList(listName: string): Promise<void> {
    try {
        let list = await List.findOne({ name: listName })
        if (!list) {
            let list = new List({ name: listName, tasks: [] })
            await list.save()
        } else {
            console.log('Такой список задач уже присутсвует');
        }
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close()
}

async function deleteList(listName: string): Promise<void> {
    try {
        let list = await List.findOne({ name: listName })
        if (list) {
            await List.deleteOne({ name: listName })
        } else {
            console.log('Нет такого списка задач');
        }
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close()
}

async function completeTask(listName: string, taskNumber: number): Promise<void> {
    try {
        const list = await List.findOne({ name: listName }).populate('tasks')
        if (list) {
            if (list.tasks.length === 0) {
                console.log('Список задач пуст, нечего завершать');
            } else {
                if (taskNumber >= 1) {
                    taskNumber = taskNumber - 1
                }
                let task = list.tasks[taskNumber];
                if (task) {
                    await Task.updateOne({ _id: task._id }, { '$set': { isDone: true } })
                } else {
                    console.log("Некорректный номер задачи")
                }
            }
        } else {
            console.log("Нет такого списка в котором вы хотите завершить задачу");
        }
    } catch (error) {
        console.log("create task error", error)
    }

    mongoose.connection.close()
}

async function showList(listName: string): Promise<void> {
    try {
        let list = await List.findOne({ name: listName }).populate('tasks')
        if (list) {
            for (let i: number = 0; i < (list.tasks).length; i++) {
                if (await list.tasks[i].isDone === false) {
                    console.log(`${i + 1}. [ ] ${(list.tasks[i].text)}`);
                } else {
                    console.log(`${i + 1}. [X] ${(list.tasks[i].text)}`);
                }
            }
        } else {
            console.log('Нет такого списка задач');
        }
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close()
}

async function showCompletedTasks(listName: string): Promise<void> {
    try {
        let list = await List.findOne({ name: listName }).populate('tasks')
        if (list) {
            let isDoneCounter: number = 0
            for (let i: number = 0; i < (list.tasks).length; i++) {
                if (await list.tasks[i].isDone === true) {
                    isDoneCounter = 1
                    console.log(`${i + 1}. [X] ${(list.tasks[i].text)}`);
                }
            }
            if (isDoneCounter === 0) {
                console.log('Выполненных задач нет')
            }
        } else {
            console.log('Нет такого списка задач');
        }
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close()
}

async function showInCompletedTasks(listName: string): Promise<void> {
    try {
        let list = await List.findOne({ name: listName }).populate('tasks')
        if (list) {
            let isDoneCounter: number = 1
            for (let i: number = 0; i < (list.tasks).length; i++) {
                if (await list.tasks[i].isDone === false) {
                    isDoneCounter = 0
                    console.log(`${i + 1}. [ ] ${(list.tasks[i].text)}`);
                }
            }
            if (isDoneCounter === 1) {
                console.log('Невыполненных задач нет')
            }
        } else {
            console.log('Нет такого списка задач');
        }
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close()
}


    switch (process.argv[2]) {
        case 'addTask':
            addTask(process.argv[4], getTaskText(), Number(process.argv[3]))
            break;
        case 'deleteTask':
            deleteTask(process.argv[4], Number(process.argv[3]))
            break;
        case 'deleteList':
            deleteList(process.argv[3]);
            break;
        case 'addList':
            addList(process.argv[3]);
            break;
        case 'showList':
            showList(process.argv[3]);
            break;
        case 'completeTask':
            completeTask(process.argv[4], +process.argv[3])
            break;
        case 'showCompletedTasks':
            showCompletedTasks(process.argv[3]);
            break;
        case 'showInCompletedTasks':
            showInCompletedTasks(process.argv[3]);
            break;
        default:
            console.log("Неправильная команда");
    }
} catch (error) {
    console.log("error in switch/case", error);
}