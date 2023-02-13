import React from "react";
import Music from "./Music";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";


const MusicContainer = (props) => {
    return <Music/>
}

let AuthRedirectComponent = withAuthRedirect(MusicContainer)

export default AuthRedirectComponent