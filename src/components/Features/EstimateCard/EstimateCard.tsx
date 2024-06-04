import { Avatar, Box, Card } from "@mui/material";
import MLogo from "../MLogo/MLogo.tsx";

interface EstimateCardProps {
	display?: string;
	name?: string;
	isHidden?: boolean;
	isActive?: boolean;
	handleClick: () => void;
}

export function EstimateCard({
	display,
	name,
	isHidden,
	handleClick,
	isActive = false,
}: EstimateCardProps) {
	return (
		<>
			<Card
				sx={{
					width: "50px",
					height: "74px",
					textAlign: "center",
					lineHeight: "74px",
					cursor: isHidden ? "inherit" : "pointer",
					mb: 2,
					backgroundColor: isActive ? "#99c221" : "inherit",
				}}
				onClick={() => handleClick()}
			>
				{isHidden === false && <strong>{display ? display : "☕"}</strong>}
				{isHidden && (
					<Box
						sx={{
							with: "20px",

							display: "inline-block",
							position: "relative",
							margin: "auto",
						}}
					>
						<MLogo />
					</Box>
				)}
			</Card>
			{name && (
				<Avatar title={name} sx={{ margin: "auto" }}>
					{name[0]}
				</Avatar>
			)}
		</>
	);
}
