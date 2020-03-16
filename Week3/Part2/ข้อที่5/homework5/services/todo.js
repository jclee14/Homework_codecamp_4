module.exports = (app, db) => {
    app.get('/todos', async (req, res) => {
        try {
            let result = await db.todo.findAll();
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.post('/createTodo', async (req, res) => {
        task = req.body.task;
        date = req.body.date;

        try {
            let result = await db.todo.create({
                task: task,
                date: date,
            });
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.put('/updateTodo/:id', async (req, res) => {
        task = req.body.task;
        date = req.body.date;


        try {
            let result = await db.todo.update(
                {
                    task: task,
                    date: date,
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

    app.delete('/deleteTodo/:id', async (req, res) => {
        try {
            let result = await db.todo.destroy({
                where: { id: req.params.id }
            });
            res.send(204).json();
        }
        catch(err) {
            console.log(err);
            res.send(400).json();
        }
    })
}