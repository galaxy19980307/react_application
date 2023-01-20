import React from "react";

const New = (props) => {
    return (
        <div>
            <div>
                <img src={props.img} alt='Картинка'/>
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.by}
            </div>
            <div>
                {props.publishTime}
            </div>
        </div>
    )
}
export default New;
