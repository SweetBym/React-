/**
 * Created by Administrator on 2018-09-10.
 */

import React, {Component}  from 'react'


 class CommentInput extends Component{

    //组件参数验证
    // static propTypes ={
    //     onSubmit: PropTypes.func
    // }

    constructor(){
        super()
        this.state ={
            username: '',
            content: ''
        }
    }

    //获取焦点
    componentDidMount(){
        this.textarea.focus()
    }
     
    componentWillMount(){
        this._loadUsername()
    }
    //刷新浏览器时，输入框中自动获得浏览器保存的用户名
    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }

    //用户名持久化，私有方法
    _saveUsername(username){
        localStorage.setItem('username',username)
    }
    //监听用户输入框失去焦点
    handleUsernameBlur(event){
       this._saveUsername(event.target.value)
    }
   
    //获取当前输入框中值
    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event){
        this.setState({
            content: event.target.value
        })
    }

    //按钮提交
     handleSubmit(){
        //判断props中是否传入了onSubmit属性
        if(this.props.onSubmit){           
            this.props.onSubmit({
                username: this.state.username, 
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        //数据传给父组件后，清空当前评论框中的内容
         this.setState({username: '', content: ''})
     }


    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username}  onChange = {this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea}
                           value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
 }


 export default CommentInput;