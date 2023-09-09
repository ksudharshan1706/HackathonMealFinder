import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./viewdishes.css"
import Dish from './Dish';
const ViewDishes = () => {
    const [dishes,setDishes] = useState([]);
    const [food,setFood] = useState("")
    const [val,setVal] = useState("")

    const getData =() =>{
        setFood(val)
    }
    useEffect(()=>{
        const getDishes = async() =>{
        const foodname = food
        if(food !== ""){
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`)
        console.log(res.data.meals)
        if(res.data.meals != null)
            setDishes(res.data.meals)
        else{
            window.alert("no food item")
        }
        }
        else{
            window.alert("give a food item")
        }
        }
        getDishes();
    },[food])
    //onClick={getDishes()}
  return (
    <div >
        <div className='formData'>
            <input style={{width:"400px",height:"30px",borderRadius:"10px"}} onChange={(e) => setVal(e.target.value)} placeholder='What do you wanna see?? 😋'/>
            <button style={{width:"100px",height:"30px",borderRadius:"10px",marginLeft:"10px"}} onClick={getData}>Search</button>
        </div>
        <div className='dishes'>
        {dishes.map((dish)=><Dish dish = {dish}/>)}
        </div>
    </div>
  )
}

export default ViewDishes