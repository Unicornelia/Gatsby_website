import React from "react"
import { StyledElementDiv } from "./styles"

const Help = () => {
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
        <br />
        <li>Várandóssággal, szüléssel, anyaszereppel kapcsolatos problémák</li>
        <br />
        <li>
          <a target="_blank" href="szules.html">
            Terhesség alatti vagy szülés utáni szorongás, lehangoltság
          </a>
        </li>
        <br />
        <li>
          <a target="_blank" href="terhesseg.html">
            Terhességi komplikációk (pl.: magas vérnyomás, kóros terhességi
            hányás, terhességi diabetes, fenyegető vetélés) kapcsán fellépő
            szorongás, lehangoltság
          </a>
        </li>
        <br />
        <li>
          <a target="_blank" href="veteles.html">
            Vetélés, csecsemő elvesztésének feldolgozása
          </a>
        </li>
        <br />
        <li>
          <a target="_blank" href="koraszules.html">
            Koraszüléssel összefüggésben jelentkező pszichológiai problémák
          </a>
        </li>
        <br />
        <li>
          Krónikus betegségek (pl.:{" "}
          <a href="endometriozis.html">endometriózis</a>) kapcsán jelentkező
          pszichés panaszok
        </li>
        <br />
        <li>
          <a target="_blank" href="onkologia.html">
            Daganatos betegséggel és a kezeléssel járó szorongás, lehangoltság
          </a>
        </li>
        <br />
        <li>
          <a target="_blank" href="menopauza.html">
            Változókorban jelentkező pszichés panaszok
          </a>
        </li>
        <br />
        <li>Férfi vagy női szexuális zavarok, párkapcsolati problémák</li>
        <br />
        <li>
          Egyéb szorongásos (pl.: hipochondriázis, fóbiák, pánikzavar),
          hangulati és pszichoszomatikus jellegű zavarok (pl.: alvászavar)
        </li>
        <br />
        <li>Krízishelyzetek, traumatikus életesemények feldolgozása</li>
        <br />
        <li>
          Életvezetésben, önértékelésben, társas kapcsolatokban jelentkező
          problémák
        </li>
        <br />
        <li>Önismeret, stresszkezelés, relaxáció, asszertivitás fejlesztése</li>
        <br />
      </ol>
    </StyledElementDiv>
  )
}

export default Help