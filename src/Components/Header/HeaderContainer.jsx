import React, { useState } from 'react'
import HeaderView from './HeaderView'
import { useNavigate } from 'react-router-dom'

const HeaderContainer = () => {
  const [isHumburgerClicked, setIsHumburgerClicked] = useState(false)

  const navigate = useNavigate()

  const handleHumburgerClick = () => setIsHumburgerClicked((prev) => !prev)
  const handleNavigate = (route) => {
    setIsHumburgerClicked(false)
    navigate(route)
  }
  return (
    <HeaderView {
      ...{handleHumburgerClick , isHumburgerClicked , handleNavigate}
    }/>
  )
}

export default HeaderContainer