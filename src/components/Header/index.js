import React from 'react'
import { Menu ,Drawer,Input,Form, Button}  from 'antd';
import { useState } from 'react';
import { MenuOutlined  } from "@ant-design/icons";
const Header = () => {
    
const [openMenu, setOpenMenu] =useState(false)
  return (
    <div className="main">
      <div 
      style={{backgroundColor:'#cd84f1',
      height:60,
      paddingLeft:12,
      paddingTop:12}}
      className='menuIcon'
      >
        
        <MenuOutlined 
        style={{color:'white',fontSize:30}} 
        onClick={()=>{
          setOpenMenu(true);
        }}/>
      </div>
      <span className='headerMenu'>
        <AppMenu/>
        </span>
      <Drawer
      placement='left'
      open={openMenu} 
      onClose={()=>{
        setOpenMenu(false)
      }}
      closable={false} 
      bodyStyle ={{background:'#cd84f1'}}>
        <AppMenu isInline/>
      </Drawer>
    </div>
  );

    }
function AppMenu({isInline=false}){
  return(
    <Menu className='menu'
    mode={isInline?"inline":"horizontal"}
    items={[
      {
        label:"Home",
        key: "home",
      },
      {
        label:"Contact Us",
        key:"contact",
      },
      {
        label:"About Us",
        key:"about",
      },
      {
        label:"Loing",
        key:"login",
      }
    ]}
    >

    </Menu>
   
  )
}
export default Header
