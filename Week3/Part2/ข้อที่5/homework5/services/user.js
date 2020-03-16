module.exports = (app, db) => {
    app.get('/users', async (req, res) => {
        try {
            let result = await db.user.findAll();
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.post('/createUser', async (req, res) => {
        firstName = req.body.firstName;
        lastName = req.body.lastName;

        try {
            let result = await db.user.create({
                firstName: firstName,
                lastName: lastName,
            });
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.put('/updateUser/:id', async (req, res) => {
        firstName = req.body.firstName;
        lastName = req.body.lastName;


        try {
            let result = await db.user.update(
                {
                    firstName: firstName,
                    lastName: lastName,
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

    app.delete('/deleteUser/:id', async (req, res) => {
        try {
            let result = await db.user.destroy({
                where: { id: req.params.id }
            });
            res.send(204).json();
        }
        catch(err) {
            console.log(err);
            res.send(400).json();
        }
    });
}