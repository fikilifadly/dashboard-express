"use strict";

const organizations = [
	{
		name: "Modena",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("m501_organization", organizations, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("m501_organization", null, {});
	},
};
