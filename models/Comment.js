// Import necessary modules and initialize the Sequelize model and connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define a Comment model class that extends Sequelize's Model class
class Comment extends Model {}

// Initialize the Comment model with its fields and configurations
Comment.init(
  {
    // 'id' is the primary key for Comment, auto-incremented integer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // 'commentBody' stores the content of the comment as text
    commentBody: {
      type: DataTypes.TEXT, // Use TEXT for potentially longer comment content
      allowNull: false,
    },
    // 'post_id' is a foreign key referencing the 'post' model's 'id' field
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    sequelize,            
    timestamps: false,    
    freezeTableName: true, 
    underscored: true,     
    modelName: 'comment', 
  }
);
// Export the Comment model
module.exports = Comment; 
