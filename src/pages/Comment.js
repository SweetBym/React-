/**
 * Created by Administrator on 2018-09-10.
 */

import React,{Component} from 'react'

class Comment extends Component{

    constructor(){
        super()
        this.state ={timeString: ''}
    }

    componentWillMount(){
     //   this._updateTimeString()
    }

    _updateTimeString(){
        const comment  = this.props.comment
        const duration = (+Date.now() - comment.createdTime)/1000
        this.setState({
            timeString: duration >60 ?
              `${Math.round(duration/60)} 分钟前`
              : `${Math.round(Math.max(duration, 1))}秒前`
        })
    }

    //删除评论
    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }
  

    render(){
        return(
            <div className='comment'>
               <div className = 'comment-user'>
                   <span>{this.props.item.username}</span> :
               </div>
                <p>{this.props.item.content}</p>
               <span className ='comment-createdTime'> 
                   {this.state.timeString}
               </span>
               <span className ='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
            </div>
        )
    }
}


export default  Comment;