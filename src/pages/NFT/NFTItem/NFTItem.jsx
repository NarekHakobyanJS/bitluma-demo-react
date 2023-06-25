import React from 'react'
import "./NFTItem.css";

const NFTItem = ({nft}) => {
  return (
    <div className='NFTItem'>
        <img src={nft.NFTImg} width={220}/>
        <p>{nft.price}$</p>
    </div>
  )
}

export default NFTItem