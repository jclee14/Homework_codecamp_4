module.exports = (sequelize, DataTypes) => {
    //const UserTodo = require('./user_todo')(sequelize, DataTypes);
    const Todo = sequelize.define('todo', {
        task: {
            type: DataTypes.STRING(45)
        },
        date: {
            type: DataTypes.DATE
        },
    })

/*     Todo.associate = (models) => {
        Todo.belongsToMany(models.user, { through: models.user_todo });
    } */

    return Todo;
}