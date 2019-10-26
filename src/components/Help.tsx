import React, { FC } from "react"
import { StyledElementDiv } from "./styles"
import { Link } from "gatsby"

type HelpProps = {
  maxChars: number
}

const Help: FC<HelpProps> = props => {
  const { maxChars } = props
  if (maxChars == 250) {
    return (
      <StyledElementDiv>
        <h4>Amiben segithetek</h4>
        <ol>
          <li>
              Terméketlenség, asszisztált reprodukciós beavatkozás kapcsán
              jelentkező pszichés panaszok
          </li>
          <li>
            Várandóssággal, szüléssel, anyaszereppel kapcsolatos problémák
          </li>
          <li>
              Terhesség alatti vagy szülés utáni szorongás, lehangoltság
          </li>
        </ol>
        <Link to="/amibenSegithetek/">Bővebben</Link>
      </StyledElementDiv>
    )
  } else {
    return (
      <StyledElementDiv>
        <h1>Amiben segithetek</h1>
        <ol>
          <li>
            <a target="_blank" href="meddoseg.pdf">
              Terméketlenség, asszisztált reprodukciós beavatkozás kapcsán
              jelentkező pszichés panaszok
            </a>
          </li>
          <li>
            Várandóssággal, szüléssel, anyaszereppel kapcsolatos problémák
          </li>
          <li>
            <a target="_blank" href="szules.html">
              Terhesség alatti vagy szülés utáni szorongás, lehangoltság
            </a>
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
          <li>Férfi vagy női szexuális zavarok, párkapcsolati problémák</li>
          <li>
            Egyéb szorongásos (pl.: hipochondriázis, fóbiák, pánikzavar),
            hangulati és pszichoszomatikus jellegű zavarok (pl.: alvászavar)
          </li>
          <li>Krízishelyzetek, traumatikus életesemények feldolgozása</li>
          <li>
            Életvezetésben, önértékelésben, társas kapcsolatokban jelentkező
            problémák
          </li>
          <li>
            Önismeret, stresszkezelés, relaxáció, asszertivitás fejlesztése
          </li>
        </ol>
      </StyledElementDiv>
    )
  }
}

export default Help
