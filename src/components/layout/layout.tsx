import { useNavigate } from "react-router-dom";
import NavigationBar from "./navbar/navbar";
import AppRouter from "./router/app.router";

import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "./sidebar/sidebar";

const Layout = () => {
    const navigate = useNavigate();
    return (
        <NextUIProvider navigate={navigate} className="w-full flex flex-col gap-4 items-center">
            <NavigationBar />
            <div className="w-full max-w-5xl flex flex-row gap-4 mt-8">
                <div className="max-w-xs w-full">
                    <Sidebar />
                </div>
                <div className="w-full">
                    <AppRouter />
                </div>
            </div>
        </NextUIProvider>
    );
}

export default Layout;