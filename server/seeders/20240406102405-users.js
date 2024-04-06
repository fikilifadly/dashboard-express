"use strict";

const { hashPass } = require("../helpers");
const { v4: uuidv4 } = require("uuid");

const users = [
	{
		username: "fikilifadly",
		password: hashPass("12345"),
		erp_user_id: uuidv4(),
		roles_id: 1,
		organization_id: 1,
		nik: "3173123456789012",
		full_name: "Fiki Lifadly Amanda Nasution",
		email: "fikilifadly@gmail.com",
		phone: "08119539332",
		image_url:
			"https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
		bank_name: "BCA",
		bank_account: "1234567890",
		has_npwp: true,
		address: "Jl. Jalan Man",
		is_active: true,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("m501_user", users, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("m501_user", null, {});
	},
};
