import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjOne } from './Data'

const Home = () => {
  return (
    <div>
        <InfoSection {...homeObjOne}/>
    </div>
  )
}

export default Home