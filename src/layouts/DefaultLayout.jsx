import { Outlet } from "react-router-dom";
import AppFooter from "../Components/AppFooter";
import AppHeader from "../Components/AppHeader";

export default function DefaultLayout() {

    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    )
}