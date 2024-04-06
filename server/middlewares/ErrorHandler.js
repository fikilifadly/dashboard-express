const errorHandler = (err, req, res, next) => {
	console.log("Error Handler: ", err.name, err);

	let statusCode = err.status || 500;
	switch (err.name) {
		case "SequelizeValidationError":
			res.status(400).json({ message: err.errors[0].message });
			break;
		case "SequelizeUniqueConstraintError":
			res.status(400).json({ message: err.errors[0].message });
			break;
		case "ValidationError":
			res.status(400).json({ message: err.errors[0].message });
			break;
		case "Invalid token":
		case "Invalid Email/Password":
		case "Email already exist":
		case "Role Not Found":
		case "Organization Not Found":
		case "User Not Found":
		case "Password is required":
		case "Username is required":
		case "Email is required":
		case "Phone is required":
		case "Bank name is required":
		case "Bank account is required":
		case "Address is required":
		case "Bad Request":
			res.status(statusCode).json({ message: err.name });
		default:
			res.status(statusCode).json({ message: "Internal Server Error" });
			break;
	}
};

module.exports = errorHandler;
