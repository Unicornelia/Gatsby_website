import React from "react"
import Background from "../../static/images/5.jpg"

const Header = () => (
  <div
    style={{
      border: `1px solid white`,
      margin: `2rem`,
      textAlign: `center`,
      backgroundImage: `url(${Background})`,
      borderRadius: `0.5rem`,
    }}
  >
    <h1
      style={{
        textShadow: `2px grey`,
        fontVariant: `small-caps`,
        fontSize: `4rem`,
      }}
    >
      Szita Bernadett
    </h1>
    <h4
      style={{
        textShadow: `2px grey`,
        fontSize: `1.5rem`,
      }}
    >
      Klinikai szakpszichológus, relaxációs- és szimbólumterapeuta
    </h4>
  </div>
)

export default Header
