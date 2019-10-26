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
      <h1
        style={{
          fontSize: "4rem",
          textAlign: "center",
        }}
      >
        {headerText}
      </h1>
      <h4
        style={{
          textShadow: `2px grey`,
          fontSize: `1.5rem`,
        }}
      >
        {subText}
      </h4>
    </StyledHeaderDiv>
  )
}

export default Header
