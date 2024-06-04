import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { setRoom } from "../../../apis/roomFunction.ts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { JoinRoom } from "../../Features/JoinRoom/JoinRoom.tsx";

export function HomePage() {
	const navigate = useNavigate();

	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	const roomId = "123";

	console.log("users", users);

	return (
		<>
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<Typography
						variant="h4"
						color="textSecondary"
						component="h2"
						sx={{ mb: 2 }}
					>
						Create a Room
					</Typography>

					<Typography variant="body2" color="textPrimary">
						The first person to <strong>create</strong> a room is the{" "}
						<strong>moderator</strong> of the room. The room can be{" "}
						<strong>shared</strong> with other team members for them to join.
					</Typography>

					<Button
						variant="outlined"
						onClick={() => {
							// Send a request to API to create a new session
							navigate({ to: "/estimate/$roomId", params: { roomId } });
						}}
						sx={{ mt: 3 }}
					>
						Create Room
					</Button>
				</Grid>
				<Grid item xs={12} md={6}>
					<JoinRoom />
				</Grid>
			</Grid>
		</>
	);
}
