import React from 'react'
import HeaderLeft from '../Technsol/src/components/header/HeaderLeft'
import MainNav from '../Technsol/src/components/header/MainNav'
import HeaderRight from '../Technsol/src/components/header/HeaderRight'

const Wrapper = () => {
  return (
    <div className="container">
        <div className="mainbar-row rbt-navigation-center align-items-center">
            <HeaderLeft />
            <MainNav />
            <HeaderRight />
        </div>
    </div>
  )
}

export default Wrapper
