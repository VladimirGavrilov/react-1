import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import ArticleList from './ArticleList'
import articles from "../fixtures"

function App(){
  return (
    <div className="container">
      <h2>App name</h2>
      <div className="card-text">
          <ArticleList articles ={articles} /> 
        </div>
      	    	
      </div>
  )
}

export default App