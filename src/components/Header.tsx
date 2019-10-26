import * as React from "react"
import * as Background from "../../static/images/5.jpg"
import { CSSProperties } from "react"

type Props = {
  height: number
  headerText: string
  subText: string
}

const Header: React.FC<Props> = props => {
  const {
    headerText = "Szita Bernadett",
    height,
    subText = "Klinikai szakpszichológus, relaxációs- és szimbólumterapeuta",
  } = props
  return (
    <div
      style={{
        height: `${height}px`,
        border: `1px solid white`,
        margin: `2rem`,
        padding: `5rem`,
        textAlign: `center`,
        backgroundImage: `url(${Background})`,
        borderRadius: `0.5rem`,
      }}
    >
      <h1
        style={{
          textShadow: `2px grey`,
          fontVariant: `small-caps`,
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
    </div>
  )
}

export default Header
