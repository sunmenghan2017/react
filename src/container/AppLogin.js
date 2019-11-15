import React, { Component } from 'react'
import { NavBar, Icon,List,InputItem} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
import AppHome from './AppTab';

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let moneyKeyboardWrapProps;
// if (isIPhone) {
//   moneyKeyboardWrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

export default class AppLogin extends Component {
    // state = {
    //     type: 'money',
    //   }
    render() {
    //     const { getFieldProps } = this.props.form;
    // const { type } = this.state;
        return (
            <div>
                <NavBar
                    style={{background:'#fff',color:'black',height:128,fontSize:16}}
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    >登陆
                </NavBar>
                {/* <List>
                <InputItem
                    {...getFieldProps('money3')}
                    type={type}
                    defaultValue={100}
                    placeholder="start from left"
                    clear
                    moneyKeyboardAlign="left"
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                >光标在左</InputItem>
                </List> */}
                <div style={{height: '400px',background:'#eee'}}>
                    <label><img/>手机</label><input style={{width:'95%',lineHeight:5}} type='text' id='username' name='username' placeholder='手机/邮箱' />
                    <label><img/>密码</label><input style={{width:'95%',lineHeight:5}} type='password'  id='pwd' name='pwd' placeholder='密码' />
                    {/* <input  style={{width:'90%',margin:'0 40px',lineHeight:5}} type="submit" value='登陆'/> */}
                    <Link  to='/'><input type='submit' style={{width:'90%',margin:'0 40px',lineHeight:5}} value='登陆'/></Link>
                    {/* <Route path={'/home'} component={AppTab} /> */}
                </div>
                <div style={{width: '100%',height: '268px',background:'#fff',paddingTop:30}}>
                    <div style={{width: '90%',height: '200px',background:'red',margin:'auto' }}>

                    </div>
                </div>
            </div>
        )
    }
}


