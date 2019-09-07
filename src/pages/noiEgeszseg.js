import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default () => (
  <Layout>
    <Header
      headerText="Szita Bernadett"
      subText="Klinikai szakpszichológus, relaxációs- és szimbólumterapeuta"
      headerPadding="5rem"
    />
    <div
      style={{
        padding: `2rem`,
        margin: `2rem`,
      }}
    >
      <h1>Női egészségpszichológia</h1>

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
      </ol>
    </div>
    <Footer/>
  </Layout>
)
