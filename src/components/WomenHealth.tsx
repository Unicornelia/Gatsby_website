import { StyledElementDiv } from "./styles"
import React, { FC } from "react"
import { Link } from "gatsby"

type HealthProps = {
  maxChars?: number
}

const Health: FC<HealthProps> = props => {
  const { maxChars } = props

  if (maxChars == 250) {
    return (
      <StyledElementDiv>
        <h4>Női egészségpszichológia</h4>
        <ol>
          <li>
            Terméketlenség, asszisztált reprodukciós beavatkozás kapcsán
            jelentkező pszichés panaszok
          </li>
          <li>
            Várandóssággal, szüléssel, anyaszereppel kapcsolatos problémák
          </li>
          <li>Terhesség alatti vagy szülés utáni szorongás, lehangoltság</li>
        </ol>
        <Link to="/noiEgeszseg/">Bővebben</Link>
      </StyledElementDiv>
    )
  } else {
    return (
      <StyledElementDiv>
        <h1>Női egészségpszichológia</h1>
        <ol>
          <li>
            <a target="_blank" href="../../src/meddoseg.pdf">
              Terméketlenség, asszisztált reprodukciós beavatkozás kapcsán
              jelentkező pszichés panaszok
            </a>
          </li>
          <li>
            Várandóssággal, szüléssel, anyaszereppel kapcsolatos problémák
          </li>
          <li>
            <Link to="birthAndPregnancy">
              Terhesség alatti vagy szülés utáni szorongás, lehangoltság
            </Link>
          </li>
          <li>
            <a target="_blank" href="terhesseg.html">
              Terhességi komplikációk (pl.: magas vérnyomás, kóros terhességi
              hányás, terhességi diabetes, fenyegető vetélés) kapcsán fellépő
              szorongás, lehangoltság
            </a>
          </li>
          <li>
            <a target="_blank" href="veteles.html">
              Vetélés, csecsemő elvesztésének feldolgozása
            </a>
          </li>
          <li>
            <a target="_blank" href="koraszules.html">
              Koraszüléssel összefüggésben jelentkező pszichológiai problémák
            </a>
          </li>
          <li>
            Krónikus betegségek (pl.:{" "}
            <a href="endometriozis.html">endometriózis</a>) kapcsán jelentkező
            pszichés panaszok
          </li>
          <li>
            <a target="_blank" href="onkologia.html">
              Daganatos betegséggel és a kezeléssel járó szorongás, lehangoltság
            </a>
          </li>
          <li>
            <a target="_blank" href="menopauza.html">
              Változókorban jelentkező pszichés panaszok
            </a>
          </li>
        </ol>
      </StyledElementDiv>
    )
  }
}

export default Health
