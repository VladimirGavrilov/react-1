import React from 'react';
import ArticleList from './ArticleList'
import articles from "../fixtures"
function App(){
  return (
      <div>
      	<h2>App name</h2>
      	 <ArticleList articles ={articles} />    	
      </div>
  )
}

export default App