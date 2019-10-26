import React, { FC } from "react"
import { StyledFooterDiv } from "./styles"

const Footer: FC = () => (
  <StyledFooterDiv>
    <h2>Rendelés</h2>
    <>
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
          <p>Telefonon: <strong>+36 20 284 1718</strong> (munkanapokon 9.00-20.00)</p>
          <p>E-mailen: <a href = "mailto: szitabernadett.info@gmail.com">szitabernadett.info@gmail.com</a></p>
        </li>
      </ul>
    </>
  </StyledFooterDiv>
)

export default Footer
