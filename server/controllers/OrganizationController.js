const { Organization } = require("../models");

module.exports = class OrganizationController {
	static async getOrganizations(req, res, next) {
		try {
			const organizations = await Organization.findAll();
			res.status(200).json(organizations);
		} catch (error) {
			next(error);
		}
	}
};
