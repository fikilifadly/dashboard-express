'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    erp_user_id: DataTypes.STRING,
    roles_id: DataTypes.INTEGER,
    organization_id: DataTypes.INTEGER,
    nik: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    image_url: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    bank_account: DataTypes.STRING,
    has_npwp: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};