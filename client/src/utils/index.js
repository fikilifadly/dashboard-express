import axios from "axios";

const AxiosJSON = axios.create({
	baseURL: "http://localhost:3000",
});

const statusPeriod = (period) => {
	if (period === "24 hours") {
		return "last day";
	} else if (period === "7 days") {
		return "last week";
	} else if (period === "30 days") {
		return "last month";
	} else if (period === "3 month") {
		return "last 3 month";
	} else if (period === "6 month") {
		return "last 6 month";
	} else if (period === "12 month") {
		return "last year";
	}
};

const convertNumber = (num) => {
	return num >= 1000 ? num.toLocaleString() : num.toString();
};

const showModalHandler = (id) => {
	if (id) {
		document.getElementById(id).showModal();
	} else {
		document.getElementById("mainmodal").showModal();
	}
};

const removeModalHandler = () => {
	document.querySelector("dialog[open]").querySelector("form").submit();
};

export { statusPeriod, convertNumber, AxiosJSON, showModalHandler, removeModalHandler };
