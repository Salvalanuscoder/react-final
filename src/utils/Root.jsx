import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'

import React from 'react'

const Root = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Root