module.exports = (app, db) => {
    app.get('/instructors', async (req, res) => {
        try {
            let result = await db.instructor.findAll();
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.post('/createInstructor', async (req, res) => {
        instructorNameTH = req.body.nameTH;
        instructorNameEN = req.body.nameEN;
        instructorRank = req.body.rank;
        instructorExpertise = req.body.expertise;
        instructorDegree = req.body.degree;

        try {
            let result = await db.instructor.create({
                name_th: instructorNameTH,
                name_en: instructorNameEN,
                academic_rank: instructorRank,
                expertise: instructorExpertise,
                degree: instructorDegree,
            });
            res.status(201).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).json();
        }
    });

    app.put('/updateInstructor/:id', async (req, res) => {
        instructorNameTH = req.body.nameTH;
        instructorNameEN = req.body.nameEN;
        instructorRank = req.body.rank;
        instructorExpertise = req.body.expertise;
        instructorDegree = req.body.degree;

        try {
            let result = await db.instructor.update(
                {
                    name_th: instructorNameTH,
                    name_en: instructorNameEN,
                    academic_rank: instructorRank,
                    expertise: instructorExpertise,
                    degree: instructorDegree,
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

    app.delete('/deleteInstructor/:id', async (req, res) => {
        try {
            let result = await db.instructor.destroy({
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