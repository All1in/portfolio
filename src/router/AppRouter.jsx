import { Route, Routes} from "react-router-dom";
import { routes } from "./router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route element={<route.element />} path={route.path} key={route.path} />
            ))}
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
