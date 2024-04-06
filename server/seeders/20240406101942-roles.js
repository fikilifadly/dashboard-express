"use strict";

/** @type {import('sequelize-cli').Migration} */

const roles = [
	{
		name: "admin",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		name: "user",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("m501_role", roles, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("m501_role", null, {});
	},
};
