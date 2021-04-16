import React, {Component} from 'react';

class Article extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: true
        }

    }
    render(){        
        const {article} = this.props
        console.log('----', this.props)  
        const body = this.state.isOpen && <section>{article.text}</section>        
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
}
 


function handleClick(){
    console.log('----','clicked')
}
export default Article