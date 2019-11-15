import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Carousel} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'

export default class AppSitting extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{background:'#fff',color:'black',height:128,fontSize:16}}
                    icon={<Icon type="left" ><Link to='/wode'></Link></Icon>}
                    onLeftClick={() => console.log('onLeftClick')}
                    >设置
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
                    <Link  to='/login'><input type='submit' style={{background:'red',width:'90%',margin:'0 40px',color:'#fff',lineHeight:5}} value='退出登陆'/></Link>
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
