import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function JoinRoom({ userName = "", estimateRoomId = "" }) {
	const navigate = useNavigate();
	const [name, setName] = useState<string>("");
	const [roomId, setRoomId] = useState<string>("");

	useEffect(() => {
		setName(userName);
		setRoomId(estimateRoomId);
	}, [userName, estimateRoomId]);

	return (
		<>
			<Typography
				variant="h4"
				color="textSecondary"
				component="h2"
				sx={{ mb: 2 }}
			>
				Join a Room
			</Typography>

			<Stack direction="row" spacing={2}>
				<TextField
					id="name"
					label="Name"
					variant="outlined"
					required={true}
					onChange={(e) => setName(e.target.value)}
				/>

				<TextField
					id="room-number"
					label="Room Number"
					variant="outlined"
					onChange={(e) => {
						console.log(e.target.value);
						setRoomId(e.target.value);
					}}
					required
				/>
			</Stack>

			<Button
				variant="outlined"
				onClick={() => {
					navigate({ to: "/estimate/$roomId", params: { roomId } });
				}}
				disabled={name === "" || roomId === ""}
				sx={{ mt: 3 }}
			>
				Join Room
			</Button>
		</>
	);
}
