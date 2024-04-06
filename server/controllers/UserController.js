const { comparePass, signToken } = require("../helpers");
const { User, Role, Organization } = require("../models");

module.exports = class UserCOntroller {
	static async login(req, res, next) {
		try {
			if (!req.body) throw { name: "Bad Request", status: 400 };

			const { email, password } = req.body;
			if (!email) throw { name: "Email is required", status: 400 };
			if (!password) throw { name: "Password is required", status: 400 };

			const data = await User.findOne({ where: { email } });

			if (!data) throw { name: "Invalid Email/Password", status: 401 };

			const isMatch = comparePass(password, data.password);
			if (!isMatch) throw { name: "Invalid Email/Password", status: 401 };

			const access_token = signToken({ erp_user_id: data.erp_user_id });

			res.status(200).json({ access_token });
		} catch (error) {
			next(error);
		}
	}

	static async register(req, res, next) {
		try {
			console.log(req);

			const { username, password, email, organization, nik, phone, bank_name, bank_account, address, roles_id, organization_id } = req.body;

			if (!username) throw { name: "Username is required", status: 400 };
			if (!password) throw { name: "Password is required", status: 400 };
			if (!email) throw { name: "Email is required", status: 400 };
			const isExist = await User.findOne({ where: { email } });
			if (isExist) throw { name: "Email already exist", status: 400 };

			// const roles = await Role.findOne({ where: { id: roles_id } });
			// if (!roles) throw { name: "Role Not Found", status: 404 };

			await User.create({ username, password, email, organization, nik, phone, bank_name, bank_account, address, roles_id, organization_id });

			res.status(201).json({ message: "Register Success, Please Login" });
		} catch (error) {
			next(error);
		}
	}

	static async editProfile(req, res, next) {
		try {
			const { erp_user_id } = req.user;
			const { username, password, email, phone, bank_name, bank_account, address } = req.body;

			const user = await User.findOne({ where: { erp_user_id } });

			if (!user) throw { name: "User Not Found", status: 404 };
			if (!req.body) throw { name: "Bad Request", status: 400 };

			let updateUser = Object.fromEntries(Object.entries(req.body).filter(([key, value]) => key in user && value !== undefined && value !== null && value !== ""));

			await user.update(updateUser);
			await user.save();

			res.status(200).json({ message: "Update Profile Success" });
		} catch (error) {
			next(error);
		}
	}

	static async getProfile(req, res, next) {
		try {
			const { erp_user_id } = req.user;
			console.log("masuk1 =====", req.user);
			const user = await User.findOne({
				include: [
					{
						model: Role,
					},
					{
						model: Organization,
					},
				],
				where: { erp_user_id },
			});

			console.log("masuk2 =====");
			if (!user) throw { name: "User Not Found", status: 404 };

			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	}
};
