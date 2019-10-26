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
          <p>Telefonon: +36 20 284 1718 (munkanapokon 9.00-20.00)</p>
          <p>E-mailen: szitabernadett.info@gmail.com</p>
        </li>
      </ul>
    </>
  </StyledFooterDiv>
)

export default Footer
