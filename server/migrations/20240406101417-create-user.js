"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("m501_user", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			erp_user_id: {
				type: Sequelize.STRING,
			},
			roles_id: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "m501_role",
					},
					key: "id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
			organization_id: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "m501_organization",
					},
					key: "id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
			nik: {
				type: Sequelize.STRING,
			},
			full_name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			phone: {
				type: Sequelize.STRING,
			},
			image_url: {
				type: Sequelize.STRING,
			},
			bank_name: {
				type: Sequelize.STRING,
			},
			bank_account: {
				type: Sequelize.STRING,
			},
			has_npwp: {
				type: Sequelize.BOOLEAN,
			},
			address: {
				type: Sequelize.STRING,
			},
			is_active: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("m501_user");
	},
};
