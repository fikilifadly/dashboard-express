const { Role } = require("../models");
module.exports = class RoleController {
	static async getRoles(req, res, next) {
		try {
			const roles = await Role.findAll();
			res.status(200).json(roles);
		} catch (error) {
			next(error);
		}
	}
};
