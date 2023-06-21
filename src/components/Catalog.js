import React from 'react'
import Product from './Product'
import {products} from "../data/data.js"

export default function Catalog() {


  return (
    <section className="catalog">
        <h1 className="catalog__title">Ты сегодня покормил кота?</h1>
        <article className="catalog__list">
        {products.map((product) =>(
        <Product product={product}/>
        ))}
        </article>

        
    </section>
  )
}
