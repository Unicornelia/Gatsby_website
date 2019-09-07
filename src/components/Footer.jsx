import React from "react"
import Background from "../../public/images/5.jpg"

const Footer =props => (
  <div
    style={{
      border: `1px solid white`,
      padding: `1rem`,
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
      }}
    >
      RENDELÉS
    </h1>
    <div>
      <ul
        style={{
          listStyle: `none`,
        }}
      >
        <li>
          <p>
            Rendelés idő: Munkanapokon előzetes telefonos vagy e-mailes
            időpont-egyeztetés alapján.
          </p>
        </li>
        <li>
          <h3>Bejelentkezés: </h3>
          <p>Telefonon: +36 20 284 1718 (munkanapokon 9.00-20.00)</p>
          <p>E-mailen: szitabernadett.info@gmail.com</p>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
