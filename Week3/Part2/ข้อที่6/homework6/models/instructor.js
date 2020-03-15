module.exports = (sequelize, DataTypes) => {
    const Instructor = sequelize.define('instructor', {
        name_th: {
            type: DataTypes.STRING(45)
        },
        name_en: {
            type: DataTypes.STRING(45)
        },
        academic_rank: {
            type: DataTypes.STRING(45)
        },
        expertise: {
            type: DataTypes.STRING(45)
        },
        degree: {
            type: DataTypes.STRING(45)
        },
    })

    return Instructor;
}