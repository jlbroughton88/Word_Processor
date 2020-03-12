import React, {useContext, useEffect} from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEnv } from "./contexts/envContext";

import { useAuth } from "use-auth0-hooks";

const Navbar = () => {
    
    const { pathname, query } = useRouter();
    const { isAuthenticated, isLoading, login, logout } = useAuth();
    const statusUrl = useEnv();

    useEffect(() => {
        console.log("statusUrl")
    }, [statusUrl])

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    { !isLoading && isAuthenticated ? (
                        <>
                        <li>
                            <Link href="/profile">
                                <a>Profile</a>
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => logout({ returnTo: "http://localhost:3000" })}>Logout</button>
                        </li>
                        </>
                    ) : (
                        <li>
                            <button onClick={() => login({ appState: { returnTo: { pathname, query } } })}>Login</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;