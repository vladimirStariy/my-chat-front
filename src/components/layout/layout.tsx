import { useNavigate } from "react-router-dom";
import NavigationBar from "./navbar/navbar";
import AppRouter from "./router/app.router";

import { NextUIProvider } from "@nextui-org/react";

const Layout = () => {
    const navigate = useNavigate();
    return (
        <NextUIProvider navigate={navigate} className="flex w-full h-[100vh]">
            <div className="w-full h-screen flex flex-col items-center">
                <NavigationBar />
                <div className="w-full h-full pt-8 pb-8 max-w-5xl flex gap-4 relative">
                    <AppRouter />
                </div>
            </div>
        </NextUIProvider>
    );
}

export default Layout;