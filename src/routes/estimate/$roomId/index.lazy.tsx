import { createLazyFileRoute } from "@tanstack/react-router";
import { EstimatePage } from "../../../components/pages/EstimatePage/EstimatePage.tsx";

export const Route = createLazyFileRoute("/estimate/$roomId/")({
	component: EstimatePage,
});
