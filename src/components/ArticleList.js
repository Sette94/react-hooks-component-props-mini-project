import React from "react";
import Article from "./Article";

function ArticleList({ blogs }) {

    return (
        <main>
            {blogs.map((post) => (
                <Article key={post.id} {...post} />
            ))}
        </main>
    );


}

export default ArticleList