import { Button, Grid, Typography } from "@mui/material";
import { useParams } from "@tanstack/react-router";
import { useState } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { EstimateCard } from "../../Features/EstimateCard/EstimateCard.tsx";
import { EstimatePlaceholder } from "../../Features/EstimatePlaceholder/EstimatePlaceholder.tsx";

export function EstimatePage() {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();
	const { roomId } = useParams({ from: "/estimate/$roomId/" });
	const [isVoter, setIsVoter] = useState<boolean>(true);
	const cardEstimates = ["0.5", "1", "2", "3", "5", "8", "13", "21", "42"];
	const [userEstimate, setUserEstimate] = useState("");
	const [isHidden, setIsHidden] = useState(true);

	console.log(users);

	const pendingEstimations = [
		{
			name: "Ashley",
			id: "333",
			value: "",
		},
		{
			name: "Bonnie",
			id: "2222",
			value: "",
		},
		{
			name: "Zitwan",
			id: "1111",
			value: "",
		},
	];
	const userEstimates = [
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
	];

	return (
		<>
			<Typography>
				<strong>Room Id</strong>: {roomId}
			</Typography>
			<Button
				sx={{ float: "right" }}
				variant="outlined"
				onClick={() => setIsVoter(!isVoter)}
			>
				Change to {users.currentUser.isEstimator ? "Observer" : "Voter"}
			</Button>

			<Typography color="textSecondary">
				Hello {users.currentUser.name}
			</Typography>

			{users.currentUser.isModerator && (
				<Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
					You are a moderator
				</Typography>
			)}

			{users.currentUser.isEstimator && (
				<React.Fragment>
					<Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
						You are a voter
					</Typography>

					<Typography sx={{ mb: 2, mt: 3 }}>
						<strong>Choose Your Estimate</strong>
					</Typography>

					<Grid container spacing={2} sx={{ mb: 2 }}>
						{cardEstimates.map((cardValue) => {
							return (
								<Grid item key={cardValue}>
									<EstimateCard
										display={cardValue}
										isHidden={false}
										isActive={cardValue === userEstimate}
										handleClick={() => setUserEstimate(cardValue)}
									/>
								</Grid>
							);
						})}

						<Grid item>
							<EstimateCard
								display="?"
								isHidden={false}
								isActive={userEstimate === "?"}
								handleClick={() => setUserEstimate("?")}
							/>
						</Grid>

						<Grid item>
							<EstimateCard
								isHidden={false}
								isActive={userEstimate === "☕"}
								handleClick={() => setUserEstimate("☕")}
							/>
						</Grid>
					</Grid>
				</React.Fragment>
			)}

			{!users.currentUser.isEstimator && !users.currentUser.isModerator && (
				<Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
					You are an observer
				</Typography>
			)}

			<Typography sx={{ mb: 2 }}>
				<strong>Estimations</strong>
			</Typography>

			<Grid container spacing={2}>
				{userEstimates.map((estimation) => (
					<Grid item key={estimation.id}>
						<EstimateCard
							handleClick={() => {}}
							display={estimation.value}
							name={estimation.name}
							isHidden={isHidden}
						/>
					</Grid>
				))}

				{pendingEstimations.map((estimation) => (
					<Grid item key={estimation.id}>
						<EstimatePlaceholder name={estimation.name} />
					</Grid>
				))}
			</Grid>

			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item>
					<Button onClick={() => {}} variant="contained" color="secondary">
						Reset Estimates
					</Button>
				</Grid>

				<Grid item>
					<Button
						variant="contained"
						onClick={() => {
							setIsHidden(!isHidden);
						}}
					>
						{isHidden ? "Show" : "Hide"} Estimates
					</Button>
				</Grid>
			</Grid>
		</>
	);
}
