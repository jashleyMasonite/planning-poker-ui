import { Grid } from "@mui/material";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";

import { Typography } from "@mui/material";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement?.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Provider store={store}>
				<header
					style={{ backgroundColor: "#333", padding: "20px", margin: "0" }}
				>
					<section
						style={{
							maxWidth: "1200px",
							margin: "0 auto",
						}}
					>
						<Grid container>
							<Grid item xs={4}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="img"
									id="logo-masonite-full"
									width="205"
									height="39"
									viewBox="0 0 205 39"
								>
									<path
										d="M11.603 16.962l5.125 2.979v18.753h-5.125V16.962zM0 .385l28.351 16.492v21.816h-5.124v-18.81L5.126 9.346V38.63L0 38.622V.385zm40.019.021v38.287H34.9V9.289l-6.556 3.808-5.103-2.963L40.019.406z"
										fill="#99c221"
									/>
									<path
										d="M126.446 11.286c6.232 0 10.581 4.729 10.581 10.473 0 5.737-4.409 10.523-10.641 10.523s-10.585-4.727-10.585-10.471 4.407-10.526 10.645-10.526zm-20.19.058c2.958 0 5.309.9 7.368 2.555l-1.915 2.695c-1.826-1.361-3.652-2.088-5.509-2.088-2.089 0-3.305 1.073-3.305 2.436 0 1.596.928 2.292 4.813 3.218 4.294 1.047 6.523 2.582 6.523 5.974 0 3.83-2.985 6.093-7.25 6.093-3.1 0-6.031-1.074-8.465-3.253l2.148-2.554c1.939 1.688 3.886 2.642 6.406 2.642 2.206 0 3.598-1.013 3.598-2.581 0-1.476-.814-2.264-4.586-3.134-4.319-1.041-6.755-2.316-6.755-6.087 0-3.538 2.9-5.916 6.929-5.916zm96.928 17.443c.93 0 1.759.669 1.759 1.709s-.829 1.717-1.759 1.717-1.759-.673-1.759-1.717.829-1.709 1.759-1.709zM89.597 11.646l8.869 20.304h-3.743l-2.048-4.868h-7.077l1.304-3.14h4.478l-3.486-8.063-6.825 16.071h-3.629l8.87-20.304h3.286zm-29.192 0l6.177 9.601 6.177-9.601h3.801v20.304h-3.566V17.389l-6.412 9.573h-.115l-6.353-9.515v14.504h-3.51V11.646h3.801zm82.275-.001l10.876 14.034V11.645h3.504v20.298h-2.983l-11.194-14.44v14.44h-3.507V11.645h3.304zm39.868 0v3.305h-6.441v16.993h-3.596V14.95h-6.436v-3.305h16.473zm-18.871.004v20.294h-3.565V11.649h3.565zm36.239-.004v3.193h-11.485v13.918h11.516v3.187h-15.081V11.645h15.05zm3.268 17.51c-.719 0-1.292.563-1.292 1.342s.573 1.351 1.292 1.351c.71 0 1.291-.568 1.291-1.351s-.581-1.342-1.291-1.342zm.041.38c.481 0 .751.151.751.568 0 .353-.22.49-.504.513l.513.838h-.398l-.467-.82h-.238v.82h-.38v-1.919h.723zm-.022.298h-.321v.504h.339c.215 0 .375-.032.375-.266 0-.206-.219-.238-.393-.238zm-76.817-15.266c-4.031 0-6.845 3.217-6.845 7.194 0 3.97 2.87 7.245 6.905 7.245 4.028 0 6.838-3.216 6.838-7.193 0-3.971-2.867-7.246-6.898-7.246zm70.676 5.572l.013 3.148h-6.341l.004-3.148h6.324z"
										fill="#ffffff"
									/>
								</svg>
							</Grid>

							<Grid item>
								<Typography
									variant="h4"
									component={"h1"}
									sx={{
										color: "white",
										textAlign: "center",
									}}
								>
									Project Estimator
								</Typography>
							</Grid>
						</Grid>
					</section>
				</header>
				<section
					style={{
						maxWidth: "1200px",
						margin: "0 auto",
						padding: "24px",
					}}
				>
					<RouterProvider router={router} />
				</section>
			</Provider>
		</StrictMode>,
	);
}
