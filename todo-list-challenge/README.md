# ToDo list

## Общие сведения
Данная задача потребует от нас использования довольно обширного набора навыков, которые мы приобрели в Elbrus Bootcamp. Мы будем использовать знания об объектно-ориентированном программировании, шаблоне проектирования «MVC», ORM Mongoose и т.д., и объединим все вместе для создания приложения с управлением из командной строки.

Наша задача - создать функциональное приложение списка дел, используя взаимодействие базы данных и командной строки. Возможно, вы уже создавали приложение командной строки для списка дел ранее в заданиях (используя CSV для хранения данных). Если так, то вы можете использовать этот проект и улучшить нашу объектно-ориентированную реализацию.


## Releases


### Release 0: Добавление задачи

```
node runner.js add Walk the dog
Added "Walk the dog".
```

*Рисунок 1*.  Добавление задачи "Walk the dog" («Выгулять собаку»).

Сначала нужно добавить метод добавления задач. Необходимо, чтобы пользователь мог запускать наше приложение с аргументом командной строки *add*, за которым следует описание новой задачи. Новая задача должна сохраняться в базе данных, и пользователь должен получить подтверждение того, что задача была сохранена. (см. Рисунок 1)

### Release 1: Список задач
```
$ node runner.js list
1. Walk the dog
2. Bake a delicious blueberry-glazed cheesecake
3. Write up that memo and fax it out
```
*Рисунок 2*.  Просмотр списка задач.

Теперь, когда мы можем добавлять задачи, добавим функцию, которая позволяет просматривать созданные задачи. (см. Рисунок 2)


### Release 2: Удаление задачи

```
$ node runner.js list
1. Walk the dog
2. Bake a delicious blueberry-glazed cheesecake

$ node runner.js delete 2
Deleted "Bake a delicious blueberry-glazed cheesecake

$ node runner.js list
1. Walk the dog
```

*Рисунок 3*. Удаление задачи.

Добавьте функцию, которая позволяет удалять конкретную задачу, если пользователь запустит наше приложение с аргументом командной строки *delete*, за которым следует номер, отображаемый рядом с задачей в списке. (см. Рисунок 3)


### Release 3: Завершение задачи

```
$ node runner.js list
1. [ ] Walk the dog
2. [ ] Bake a delicious blueberry-glazed cheesecake

$ node runner.js complete 2
Marked "Bake a delicious blueberry-glazed cheesecake" as complete

$ node runner.js list
1. [ ] Walk the dog
2. [X] Bake a delicious blueberry-glazed cheesecake
```

*Рисунок 4*. Пометка задачи как выполненной.

Теперь добавим в приложение функцию выполнения задачи. Необходимо, чтобы пользователи могли помечать задачи как выполненные, запустив наше приложение с аргументом командной строки *complete*, за которым следует номер, отображаемый рядом с задачей в списке. Также мы хотим, чтобы в списке задач отображался статус задачи (выполнена или нет). (см. Рисунок 4)


### Release 4: Список невыполненных и выполненных задач
```
$ node runner.js list
1. [ ] Walk the dog
2. [X] Bake a delicious blueberry-glazed cheesecake

$ node runner.js list outstanding
1. [ ] Walk the dog

$ node runner.js list completed
2. [X] Bake a delicious blueberry-glazed cheesecake
```

*Рисунок 5*. Отображение списков выполненных и невыполненных задач.

Добавьте функцию, которая позволяет отображать только невыполненные или только выполненные задачи. (см. Рисунок 5)

