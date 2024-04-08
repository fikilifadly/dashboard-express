import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosJSON } from "../utils";
import { toast } from "react-toastify";

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
		loading: true,
		errorMessage: "",
		registerData: {
			username: "",
			email: "",
			password: "",
			organization: "",
			nik: "",
			phone: "",
			bank_name: "",
			bank_account: "",
			address: "",
		},
		stepRegister: 1,
	},
	reducers: {
		setNullCurrentUser: (state) => {
			state.currentUser = null;
		},
		setRegister: (state, { payload }) => {
			state.registerData = { ...state.registerData, ...payload };
			if (state.stepRegister < 3) {
				state.stepRegister++;
			}
		},
		resetStepRegister: (state) => {
			state.stepRegister = 1;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state) => {
				state.loading = false;
				toast.success("login Success");
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.loading = false;
				state.errorMessage = payload.response.data.message;
				toast.error(state.errorMessage);
			});

		builder
			.addCase(register.pending, (state) => {
				state.loading = true;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.currentUser = payload;
				state.loading = false;
				toast.success(payload.message);
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.loading = false;
				console.log(payload, "====slice");

				state.errorMessage = payload.message;
				toast.error(state.errorMessage);
			});

		builder
			.addCase(editProfile.pending, (state) => {
				state.loading = true;
			})
			.addCase(editProfile.fulfilled, (state, { payload }) => {
				state.currentUser = payload;
				state.loading = false;
				toast.success(payload.message);
			})
			.addCase(editProfile.rejected, (state, { payload }) => {
				state.loading = false;
				state.errorMessage = payload.response.data.message;
				toast.error(state.errorMessage);
			});

		builder
			.addCase(getProfile.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProfile.fulfilled, (state, { payload }) => {
				state.currentUser = payload;
				state.loading = false;
			})
			.addCase(getProfile.rejected, (state, { payload }) => {
				state.loading = false;
				state.errorMessage = payload.message;
			});
	},
});

export const login = createAsyncThunk("user/login", async (data, { rejectWithValue }) => {
	try {
		const { data: result } = await AxiosJSON({
			method: "POST",
			url: "login",
			data: JSON.stringify(data),
		});

		if (result) {
			localStorage.setItem("access_token", result.access_token);

			AxiosJSON.defaults.headers.common["Authorization"] = `Bearer ${result.access_token}`;
		}

		return result;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const register = createAsyncThunk("user/register", async (data, { rejectWithValue }) => {
	try {
		const { data: result } = await AxiosJSON({
			method: "POST",
			url: "/register",
			data,
		});
		return result;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const editProfile = createAsyncThunk("user/editProfile", async (data, { rejectWithValue }) => {
	try {
		const { data: result } = await AxiosJSON({
			method: "PATCH",
			url: "/profile",
			data,
		});
		return result;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const getProfile = createAsyncThunk("user/getProfile", async (data, { rejectWithValue }) => {
	try {
		const { data: result } = await AxiosJSON({
			url: "/profile",
		});

		return result;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const { setNullCurrentUser, setRegister, resetStepRegister } = userSlice.actions;
export default userSlice.reducer;
