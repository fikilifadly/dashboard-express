"use strict";
const { Model } = require("sequelize");
const { hashPass } = require("../helpers");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.belongsTo(models.Role, { foreignKey: "roles_id" });
			User.belongsTo(models.Organization, { foreignKey: "organization_id" });
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Username is required",
					},
					notEmpty: {
						msg: "Username is required",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Password is required",
					},
					notEmpty: {
						msg: "Password is required",
					},
				},
			},
			erp_user_id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			roles_id: DataTypes.INTEGER,
			organization_id: DataTypes.INTEGER,
			nik: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "NIK is required",
					},
					notEmpty: {
						msg: "NIK is required",
					},
				},
			},
			full_name: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notNull: {
						msg: "Email is required",
					},
					notEmpty: {
						msg: "Email is required",
					},
					isEmail: {
						msg: "Invalid Email",
					},
				},
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notNull: {
						msg: "Phone is required",
					},
					notEmpty: {
						msg: "Phone is required",
					},
				},
			},
			image_url: DataTypes.STRING,
			bank_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Bank name is required",
					},
					notEmpty: {
						msg: "Bank name is required",
					},
				},
			},
			bank_account: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Bank account is required",
					},
					notEmpty: {
						msg: "Bank account is required",
					},
				},
			},
			has_npwp: DataTypes.BOOLEAN,
			address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Address is required",
					},
					notEmpty: {
						msg: "Address is required",
					},
				},
			},
			is_active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			tableName: "m501_user",
			modelName: "User",
		}
	);

	User.beforeCreate(async (user) => {
		console.log(user, "=====model====", user.organization);

		user.password = hashPass(user.password);
	});

	return User;
};
