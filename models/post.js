// Imports Required for Post Model
const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

// This Sets up Sequelize Model for Posts
class Post extends Model {}
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

// This Exports Post Model
module.exports = Post;