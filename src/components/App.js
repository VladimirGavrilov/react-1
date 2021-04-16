import React from 'react';
import Article from './Article'
import articles from "../fixtures"
function App(){
  return (
      <div>
      	<h2>App name</h2>
     	<Article article = {articles[1]}/>
      </div>

  )

}

export default App