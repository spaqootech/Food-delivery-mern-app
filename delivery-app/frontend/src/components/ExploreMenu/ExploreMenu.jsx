import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className="explore-menu">
        <h1>Explore Menu</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat iste dolore magnam amet consectetur velit maxime neque laborum atque voluptate aut autem
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div id='menu'
                    onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} 
                    key={index} className="items">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <br />
        <hr />
    </div>
  )
}

export default ExploreMenu