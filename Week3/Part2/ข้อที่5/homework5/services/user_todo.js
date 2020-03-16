module.exports = (app, db) => {
    app.get('/user_todos', async (req, res) => {
        try {
            let result = await db.user_todo.findAll();
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.post('/create_user_todo', async (req, res) => {
        const userId = req.body.userId;
        const todoId = req.body.todoId;

        try {
            let result = await db.user_todo.create({
                user_id: userId,
                todo_id: todoId,
            });
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.put('/update_user_todo/:id', async (req, res) => {
        const userId = req.body.userId;
        const todoId = req.body.todoId;


        try {
            let result = await db.user_todo.update(
                {
                    user_id: userId,
                    todo_id: todoId,
                },
                {
                    where: { id: req.params.id }
                }
            );
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.send(400).json();
        }
    });

    app.delete('/delete_user_todo/:id', async (req, res) => {
        try {
            let result = await db.user_todo.destroy({
                where: { id: req.params.id }
            });
            res.send(204).json();
        }
        catch(err) {
            console.log(err);
            res.send(400).json();
        }
    })

/*     app.post('/create_user_todo', async (req, res) => {
        const userId = req.body.userId;
        const todoId = req.body.todoId;
        const date = req.body.date;

        const user = await db.user.findByPk(userId);
        const todo = await db.todo.findByPk(todoId);

        try {
            let result = await user.addTodo(todo, { through: { date: date } });
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.send(400).json(err.message);
        } 
    });*/
}