import React from 'react'
import "./NFT.css"
import NFTItem from './NFTItem/NFTItem'

const NFT = () => {
    const NFTData = [
        {id : 1, NFTImg : "./img/NFT/Charenc1.png", price : "122", dataRelese : "24/11/23"},
        {id : 2, NFTImg : "./img/NFT/Charenc2.png", price : "122", dataRelese : "24/11/23"},
        {id : 3, NFTImg : "./img/NFT/Charenc3.png", price : "122", dataRelese : "24/11/23"},
        {id : 4, NFTImg : "./img/NFT/Charenc4.png", price : "122", dataRelese : "24/11/23"},
        {id : 5, NFTImg : "./img/NFT/Charenc5.png", price : "122", dataRelese : "24/11/23"},
        {id : 6, NFTImg : "./img/NFT/Charenc6.png", price : "122", dataRelese : "24/11/23"},
        {id : 7, NFTImg : "./img/NFT/Charenc7.png", price : "122", dataRelese : "24/11/23"},
    ]
  return (
    <div className='nft'>
        NFT store
        <div className='nft-item-block'>
        {
            NFTData.map(nft => <NFTItem nft={nft}/>)
        }
        </div>
    </div>
  )
}

export default NFT