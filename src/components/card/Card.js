import React from 'react'
import PropTypes from 'prop-types'
import classes from './card.module.scss'





export const Card = (props) =>{


   if(props.show){
    return(

        <div  className = {classes.card} >
            <h2 onClick = {()=> props.click(props.name)}>Name: {props.name} </h2>
            <h3>Color: {props.color}</h3>
            <h3>Описание:</h3>
            <p>описание животного</p>
            
        </div>
    )
   }else{
    return(
        <div className = {classes.card}>
            <h2 onClick = {()=> props.click(props.name)}>Name: {props.name} </h2>
            <h3>Color: {props.color}</h3>
        </div>
    )
   }
}


Card.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string 
}