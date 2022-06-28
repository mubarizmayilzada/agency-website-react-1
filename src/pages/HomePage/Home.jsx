import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
  return (
    <div>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjFour}/>
    </div>
  )
}

export default Home