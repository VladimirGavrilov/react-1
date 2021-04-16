import React from 'react';
function Article(props){
  const {article} = props  
  const body = <section>{article.text}</section>
  
  return (
  	<div>
      <h2 className="top-1" style={{color:"red"}}>
      {article.title}
      <button onClick={handleClick}>Close</button>
      </h2>
      {body}
      <h3>
        creation date: {(new Date()).toDateString()}
      </h3>
    </div>
  )

}
function handleClick(){
    console.log('----','clicked')
}
export default Article