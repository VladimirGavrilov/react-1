import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"

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
                    
                </h2>
                <button className="bg-warning text-white" onClick={this.handleClick}>
                    {this.state.isOpen ? "Закрыть" : "Открыть"  }
                    </button>
                {body}
                <h3>
                    creation date: {(new Date()).toDateString()}
                </h3>
            </div>
        )

        }
        handleClick = () => {
             console.log('----','clicked')
             this.setState({
                 isOpen: !this.state.isOpen
             })
        }
}
 


 
export default Article