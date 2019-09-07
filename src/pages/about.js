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
      <h1>MAGAMRÓL</h1>
      <p>
        Szita Bernadett klinikai szakpszichológus, relaxációs- és
        szimbólumterapeuta vagyok. Pszichológus diplomámat az Eötvös Loránd
        Tudományegyetemen, klinikai és mentálhigiéniai szakpszichológus
        szakvizsgámat a Semmelweis Egyetemen szereztem meg. Két évig dolgoztam a
        Semmelweis Egyetem Pszichiátriai és Pszichoterápiás Klinikáján, öt éve
        az I. sz. Szülészeti- és Nőgyógyászati Klinika munkatársa vagyok. Munkám
        során főként stresszhez társuló és pszichoszomatikus jellegű zavarokkal
        foglalkozom. Kiemelt érdeklődési területem a krónikus betegségek,
        vetélés, meddőség, mesterséges megtermékenyítés (lombik), terhesség,
        szülés kapcsán jelentkező pszichés problémák kezelése. A klinikai munka
        mellett rendszeres publikációs tevékenységet folytatok, két egyetemi
        tankönyvfejezet szerzője vagyok.
      </p>

      <h4>Módszerek</h4>
      <p>
        Terápiás munkámban relaxációs-imaginációs módszerekkel (autogén tréning,
        szimbólumterápia) és kognitív-viselkedésterápiás technikákkal dolgozom.
      </p>

      <h2>Tanulmányok</h2>
      <ul>
        <li>
          2012 Sématerápia, Metakognitív módszerek, Semmelweis Egyetem, Klinikai
          Pszichológia Tanszék
        </li>
        <li>
          2012 Tudatos jelenlét (Mindfulness), Semmelweis Egyetem, Klinikai
          Pszichológia Tanszék
        </li>
        <li>
          2011- Hipnoterapeuta módszerspecifikus képzés, Magyar Hipnózis
          Egyesület
        </li>
        <li>
          2011-2015 Relaxációs- és szimbólumterápia, Relaxációs és
          Szimbólumterápiás Egyesület
        </li>
        <li>
          2011-2015 Felnőtt klinikai és mentálhigiéniai szakpszichológia,
          Semmelweis Egyetem
        </li>
        <li>
          2010 A kognitív viselkedésterápia alapjai, Semmelweis Egyetem,
          Klinikai Pszichológia Tanszék
        </li>
        <li>
          2009-2010 Szondi-teszt gyakorlata és elmélete, Szondi Lipót
          Emlékalapítvány
        </li>
        <li>
          2008-2009 Autogén tréning, Relaxációs és Szimbólumterápiás Egyesület
        </li>
        <li>
          2007-2009 Williams Életkészségek tréning- és facilitátorképzés, Selye
          János Magyar Magatartástudományi és Magatartásorvoslási Társaság
        </li>
        <li>2004-2010 Pszichológia, Eötvös Lóránd Tudományegyetem</li>
      </ul>
    </div>
    <Footer/>
  </Layout>
)
