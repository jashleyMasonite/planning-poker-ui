import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
	name: "users",
	initialState: {
		users: [
			{
				name: "Justin",
				id: "123",
				value: "1",
			},
			{
				name: "Saroj",
				id: "12",
				value: "21",
			},
			{
				name: "Eileen",
				id: "13",
				value: "13",
			},
			{
				name: "Jace",
				id: "1",
				value: "8",
			},
			{
				name: "Naqib",
				id: "3",
				value: "5",
			},
		],
		currentUser: {
			name: "Justin",
			isEstimator: true,
			isModerator: false,
		},
	},
	reducers: {
		addUser: (state, user) => {
			state.users.push(user);
		},
		removeUser: (state, user) => {
			// TODO: Remove the user
		},
		updateCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});
