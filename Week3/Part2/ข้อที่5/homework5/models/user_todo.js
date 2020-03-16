module.exports = (sequelize, DataTypes) => {
    const UserTodo = sequelize.define('user_todo', {
        user_id: {
            type: DataTypes.INTEGER
        },
        todo_id: {
            type: DataTypes.INTEGER
        }
    })

    return UserTodo;
}