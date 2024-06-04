import { Avatar, Card } from "@mui/material";

interface EstimatePlaceholderProps {
	name?: string;
}

export function EstimatePlaceholder({ name }: EstimatePlaceholderProps) {
	return (
		<>
			<Card
				sx={{
					width: "50px",
					height: "74px",
					textAlign: "center",
					lineHeight: "74px",
					border: "1px dashed #ccc",
					backgroundColor: "#f9f9f9",
					mb: 2,
				}}
				onClick={() => {}}
			/>
			{name && (
				<Avatar title={name} sx={{ margin: "auto" }}>
					{name[0]}
				</Avatar>
			)}
		</>
	);
}
