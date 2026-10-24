import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import { getScrollContainer } from "../utils/scroll";

const Root = styled("div")({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
});

const Main = styled("main")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
});

function Layout() {
    const { pathname, hash } = useLocation();

    // #root is the scroll container, so the router's own scroll restoration doesn't apply.
    // Start each new page at the top; hash links (e.g. /#fleet) are scrolled by the Navbar.
    useEffect(() => {
        if (!hash) {
            getScrollContainer().scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <Root>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
        </Root>
    );
}

export default Layout;