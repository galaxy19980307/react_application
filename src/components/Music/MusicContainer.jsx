import React from "react";
import Music from "./Music";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


const MusicContainer = (props) => {
    return <Music/>
}
export default compose(withAuthRedirect)(MusicContainer)

