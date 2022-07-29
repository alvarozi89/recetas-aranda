import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import './Recetas.css'
import image from "./assets/Grupo 7610.png";

const Recetas = () => {
    const [datos,setDatos]=useState([])
    useEffect(()=>{
      obtenerRecetas();
      },[])

      const obtenerRecetas = async()=>{
        const respuesta = await Axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        console.log(respuesta.data.meals)
        setDatos(respuesta.data.meals)
    }
  return (
    <div>
    <div className="headform">
    <div className="header">
        <div className="title">
            <span className="text1">Recipe<span className="text2">App</span></span>
        </div>
        <div className="menuHead">
            <ul>
                <li className="selected">Home</li>
                <li>Vegetarianos</li>
                <li>Platos Principales</li>
                <li>Tortas</li>
                <li>Comida R&aacute;pida</li>
                <li>Men&uacute; Ni&ntilde;os</li>
                <li>Sopas</li>
            </ul>
        </div>
        <div className="icoHome"></div>
    </div>

    <div className="imgHead">
        <div className="floatText">
            <div className="text1">Recetas</div>
            <div className="text2">para todos</div>
        </div>
    </div>

    <div id="menuHead2" className="menuHeads">
    </div>
    <div className="middle">
        <div className="middleTitle">Nuevas Recetas</div>
        {datos.map(respuesta=>{
            return(
                <div className='cardRe'>
                <img className="imagenCard" src={respuesta.strMealThumb} alt=""/>
                <div className="container">
                  <h4><b>{respuesta.strMeal} </b></h4> 
                  <p>Ver video de preparación: <a href={respuesta.strYoutube}>Ir</a></p>
                </div>
              </div>
            )
            })}
    </div>
    </div>
    <div className="footer">
        <div className="textfooter"><span>Con el patrocinio de</span></div>
        <img className="imgFooter" src={image}alt="" />
    </div>
    </div>
  )
}

export default Recetas