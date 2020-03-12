import React from "react";
import Navbar from "./comps/navbar";
import Link from "next/link";
import "../public/static/css/profile.scss";

import { withAuth, withLoginRequired } from "use-auth0-hooks";

const Profile = ({ auth }) => {
  const { user } = auth;

  return (
    <div className="profileMother">
      <Navbar />
      <section className="profileHeader">
        <div className="welcomeDiv">
          <h3 className="welcome">Welcome, {user.nickname}!</h3>
        </div>
        <div className="newPostCTADiv">
            <Link href="/post">
            <a>
               <div className="newPostCTA">New Post</div> 
            </a>
            </Link>
          
        </div>
      </section>
      {/* <pre>{ JSON.stringify(user || { }, null, 2) }</pre> */}
    </div>
  );
};

export default withLoginRequired(withAuth(Profile));
