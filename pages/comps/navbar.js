import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEnv } from "./contexts/envContext";
import "../../public/static/css/navbar.scss";
import { useAuth } from "use-auth0-hooks";

const Navbar = () => {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout, user } = useAuth();
  const statusUrl = useEnv();

  useEffect(() => {
   
  }, [statusUrl]);

  return (
    <header>
      <nav>
        <span className="homeBtnDiv">
          <Link href="/">
            <a className="homeBtn">Home</a>
          </Link>
        </span>
        {/* {!isLoading && isAuthenticated ? (
            <>
              <li>
                <button
                  onClick={() => logout({ returnTo: "http://localhost:3000" })}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() =>
                  login({ appState: { returnTo: { pathname, query } } })
                }
              >
                Login
              </button>
            </li>
          )} */}
        {user && (
          <ul>
            <li className="name">
              <p>{user.nickname}</p>
            </li>
            <li className="profileBtnDiv">
              <Link href="/profile">
                <a>
                  <img className="profileBtn" src={user.picture} />
                </a>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
