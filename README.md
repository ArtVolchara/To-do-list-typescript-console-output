# ToDo list(+Typescript version)

## Общие сведения
Для работы с проектом необходимо иметь установленные библиотеки NODE, NPM. А также установленная MongoDB.
 1. Для запуска программы нужно находясь в папке todo-list-challenge выполнить команду:
  npm install
  
 2. Чтобы создать список наберите:
  node.js runner.js addList *название списка*
  
  Например:  node.js runner.js addList List
 3. Чтобы создать задачу наберите:
  node.js runner.js addTask *номер, под которым вы хотели бы видеть задачу в списке(если 1-ая, то 1)* *Список задач, в который хотите вставить задачу* *текст задачи*.

  Например: node runner.js add 1 List Wake up

  Примечание: Если при этом списка задач с именем "List" создано не было, то он будет создан и в него добавится задача Wake up.
  
 4. Чтобы удалить задачу наберите:
   node runner.js deleteTask *порядковый номер задачи* *название списка*
   
   Например: node runner.js delete 1 List
   
 5. Чтобы удалить список задач наберите:
   node runner.js deleteList *Название списка*
   
   Например: node runner.js deleteList Home
   
 6. Чтобы посмореть список задач наберите:
   node runner.js showList *Название списка*
   
   Например: node runner.js showList List
   
 7. Чтобы отметить задачу, как завершенную, наберите:
   node runner.js completeTask *номер задачи, которую хотите завершить* *название списка задач,в котором вы хотите завершить задачу*
   
   Например: node runner.js completeTask 1 List
   
 8. Чтобы показать только завершенные задачи в списке, наберите:
   node runner.js showCompletedTasks *Название списка*
   
   Например: node runner.js showCompletedTasks List
   
 9. Чтобы показать только незавершенные задачи в списке, наберите:
   node runner.js showInCompletedTasks *Название списка*
   
   Например: node runner.js showInCompletedTasks List

Для запуска проекта из папки todo-list-challenge-typescript необходимо сначала скомпилировать в js. Наберите:
tsc typescript runner.ts
Затем выполняйте нужные вышеупомянутые команды заменив "runner.js" на "typescript runner.js"
