import React from 'react'
import {InfoSection, Pricing} from '../../components';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
  return (
    <div>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjTwo}/>
        <Pricing/>
        <InfoSection {...homeObjFour}/>
    </div>
  )
}

export default Home