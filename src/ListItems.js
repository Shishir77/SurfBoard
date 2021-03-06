import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import {useNavigate} from "react-router-dom" 



function ListItems(props){
    let navigate = useNavigate();
    const items = props.items ; 
    const listItems = Array.from(items).map(item=>
        {
            return <div className='list' key = {item.key}> 
                <p>
                <input type="text" 
                id={item.key} 
                value={item.text} 
                onChange={(e)=>{
                                props.setUpdate(e.target.value,item.key)}
                                }
                                ></input>
                    
                <span>
                    <FontAwesomeIcon className="faicons" onClick={() => {
                     props.deleteItem(item.key)
                        }} icon="trash"/>
                    <button 
                    onClick={()=>{
                        navigate ("/VideoChat")
                    }
                    }>Call</button>
                    
                    

                </span>
                </p>
                

                </div>
        })
        
        //console.log(listItems);
    return (
        
     <div>
        <FlipMove
        duration= {400}
        easing = "ease-in-out">
            
            {listItems}
        </FlipMove>
        
       </div>

    )
}

export default ListItems ;