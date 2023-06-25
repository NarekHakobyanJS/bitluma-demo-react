import React from 'react'
import Container from '../../components/Container/Container'
import FirstBlock from '../../components/HomeComponents/FirsBlock/FirstBlock'
import HomeProject from '../../components/HomeComponents/HomeProject/HomeProject'
import HomeSerivces from '../../components/HomeComponents/HomeServices/HomeSerivces'
import MayoyiXrkace from '../../components/HomeComponents/MayoyiXrkace/MayoyiXrkace'
import SecondBlock from '../../components/HomeComponents/SecondBlock/SecondBlock'
import './HomePage.css'
const HomePage = () => {
  return (
    <Container>
        <div className='homepage'>
        <FirstBlock />
        <SecondBlock />
        <HomeSerivces />
        <HomeProject />
        <MayoyiXrkace />
        </div>
    </Container>
  )
}

export default HomePage