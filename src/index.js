import React from 'react';
import {render} from 'react-dom';

function Article(){
  const body = <section>Body</section>
  
  return (
  	<div>
      <h2 className="top-1" style={{color:"red"}}>Title</h2>
      {body}
      <h3>
        creation date:{(new Date).toDateString()}
      </h3>
    </div>
  )

}
function App(){
  return (
      <div>
      	<h2>App name</h2>
     	<Article />
      </div>

  )

}

render(<App/>, document.getElementById('root'))