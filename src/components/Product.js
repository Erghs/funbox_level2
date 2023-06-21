import React from 'react'
import { useState } from 'react';
import cat from "../assets/img/cat.jpg"


export default function Product({product}) {
    const [note, setNote] = useState("Сказочное заморское яство");
    const {selected} = product.selected
    const [isSelected, setIsSelected] = useState(selected);

   const handleMouseEnter = () => {
      if(isSelected){
          setNote("Котэ не одобряет?")
      }
   };
   const handleMouseLeave = () => {
    if(isSelected){
        setNote("Сказочное заморское яство")
    }
   };

   const handleChangeFlag = () => {
       if(product.availability){
            setIsSelected(!isSelected)
       }
       if(isSelected){
            setNote("Сказочное заморское яство")
       }

   };

  return (
    <article className={`catalog__item ${isSelected?"selected":""} ${product.availability?"":"disabled"}`} 
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
    <div onClick={handleChangeFlag}  className="catalog__item-card card-product">
        <p className="card-product__note" >{note}</p>
        <h2 className="card-product__title">{product.name} <span>{product.taste}</span></h2>
        <ul className="card-product__bonus bonus">
            <li className="bonus-serving">{product.bonus.serving}</li> 
            <li className="bonus-toys">{product.bonus.toys}</li> 
            <li className="bonus-toys">{product.bonus.opinion}</li> 
        </ul>
        <img className="card-product__img" src={cat} alt="cat"></img>
        <div class="card-product__weight">{product.weight}<br/><span>кг</span></div>
    </div>
    {!isSelected && product.availability?
    <p className="catalog__item-footer-text footer-text">Чего сидишь? Порадуй котэ, <span><button className="catalog__btn-text" type="button" onClick={handleChangeFlag}>купи.</button></span></p>
    :
    <p className="catalog__item-footer-text footer-text">{product.availability?product.text_available:product.text_unavailable}</p>
    }
    </article>
  )
}
