import React from "react";

function About({ imgDetail, aboutDetail }) {

    return <aside>
        <img src={imgDetail ? imgDetail : "https://via.placeholder.com/215"}
            alt="blog logo"></ img >

        <p>{aboutDetail}</p>
    </aside>


}

export default About