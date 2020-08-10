'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Food.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the title field"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the price field"
        }
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the ingredients field"
        }
      }
    },
    tag: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the tag field"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};