import React from "react";
import Minutes from "./Minutes";

function Article({ id, title, date, preview, minutes }) {

    console.log(id)

    return <article>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"} <Minutes minutes={minutes} /></small>
        <p>{preview}</p>
    </article>


}

export default Article