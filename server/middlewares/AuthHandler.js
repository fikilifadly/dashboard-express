const { User } = require("../models");
const { verifyToken } = require("../helpers");

async function authentication(req, res, next) {
	try {
		const { authorization } = req.headers;

		if (!authorization) throw { name: "Invalid token", status: 401 };

		const [bearer, token] = authorization.split(" ");

		if (bearer !== "Bearer" || !token) throw { name: "Invalid token", status: 401 };

		const { erp_user_id } = verifyToken(token);
		const user = await User.findOne({
			where: {
				erp_user_id,
			},
		});
		if (!user) throw { name: "Invalid token", status: 401 };

		req.user = {
			erp_user_id,
		};

		next();
	} catch (error) {
		console.log("error auth: ", error);
		next(error);
	}
}

module.exports = authentication;
