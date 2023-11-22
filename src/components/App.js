import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}

      <Header blogs={blogData.posts} />
      <About imgDetail={blogData.image} aboutDetail={blogData.about} />
      <ArticleList blogs={blogData.posts} />


    </div>

  );
}

export default App;
