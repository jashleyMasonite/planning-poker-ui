import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            {/*<Link to="/">Home</Link>*/}
            {/*<br />*/}
            {/*<Link to="/estimate">Estimate</Link>*/}
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
})
