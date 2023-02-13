import React from "react";
import Settings from "./Settings";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

const SettingsContainer = () => {
    return <Settings/>
}
let AuthRedirectComponent = withAuthRedirect(SettingsContainer)
export default AuthRedirectComponent;
