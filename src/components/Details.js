import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { ButtonContainer } from './Button'
import { ProductConsumer } from '../context'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} alt='product' className='img-fluid' />
                </div>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <h1>Model: {title}</h1>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    Made by: <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className='font-weight-bold mt-3 mb-0'>Description:</p>
                  <p className='text-muted lead'>{info}</p>
                  <div>
                    <Link to='/'>
                      <ButtonContainer>Back to products page</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disable={inCart ? true : false}
                      onClick={() => value.addToCart(id)}
                    >
                      {inCart ? 'In Cart' : 'Add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
