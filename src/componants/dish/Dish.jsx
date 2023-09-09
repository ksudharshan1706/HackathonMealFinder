import React from 'react'
import "../viewdishes.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
const Dish = ({dish}) => {
  return (
    <div className='dishCart'>
        <img className="dishImg"src={dish.strMealThumb} alt=''/>
        <div>{dish.strMeal}</div>
        <a href={dish.strYoutube} style={{textDecoration:"none",color:"white"}} target='_blank'>
          <div className='btn'>
            Watch Video 
            <div style={{marginLeft:"10px",marginTop:"5px"}}>
              <YouTubeIcon/>
            </div>
          </div>
        </a>
    </div>
  )
}

export default Dish