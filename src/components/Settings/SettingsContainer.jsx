import React from "react";
import Settings from "./Settings";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

const SettingsContainer = () => {
    return <Settings/>
}
export default compose(withAuthRedirect)(SettingsContainer)
