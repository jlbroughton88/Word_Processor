import React from "react";
import Navbar from "./comps/navbar";

import { withAuth, withLoginRequired } from "use-auth0-hooks";

const Profile = ({auth}) => {
    
    const { user } = auth;
    
    return (
        <div>
            <Navbar/>
            <h1>Profile</h1>
            <p>This is the profile page.</p>
            <pre>{ JSON.stringify(user || { }, null, 2) }</pre>
        </div>
    )
}

export default withLoginRequired(
    withAuth(Profile)
);