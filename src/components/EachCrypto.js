import React from 'react'

const EachCrypto = ({coin}) => {
    const {id, priceUsd, supply } = coin;
  return (
    <div className='each-coin'>{id}</div>
  )
}

export default EachCrypto