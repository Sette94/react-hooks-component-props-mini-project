import React from "react";

function Header({ blogs }) {
    console.log(blogs)

    const titles = blogs.map((posts, index) => {
        console.log(<div><h1 id={index}>{posts.title}</h1></div>)
        return <h1 id={index}>{posts.title}</h1>
    })

    return <header>{titles}</header>

}

export default Header