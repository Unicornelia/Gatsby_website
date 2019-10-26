import React, { FC } from "react"
import { StyledHeaderDiv } from "./styles"

type Props = {
  height: number
  headerText?: string
  subText?: string
}

const Header: FC<Props> = props => {
  const {
    headerText = "Szita Bernadett",
    height,
    subText = "Klinikai szakpszichológus, relaxációs- és szimbólumterapeuta",
  } = props
  return (
    <StyledHeaderDiv height={height}>
      <h1>{headerText}</h1>
      <h4>{subText}</h4>
    </StyledHeaderDiv>
  )
}

export default Header
