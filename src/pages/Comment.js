/**
 * Created by Administrator on 2018-09-10.
 */

import React,{Component} from 'react'

class Comment extends Component{
    render(){
        return(
            <div className='comment'>
               <div className = 'comment-user'>
                   <span>{this.props.item.username}</span> :
               </div>
                <p>{this.props.item.content}</p>
            </div>
        )
    }
}


export default  Comment;