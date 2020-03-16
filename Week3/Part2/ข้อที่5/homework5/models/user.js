module.exports = (sequelize, DataTypes) => {
    //const UserTodo = require('./user_todo')(sequelize, DataTypes);
    const User = sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING(45)
        },
        lastName: {
            type: DataTypes.STRING(45)
        },
    })

/*     User.associate = (models) => {
        User.belongsToMany(models.todo, { through: models.user_todo });
    } */

    return User;
}