import React from "react"
import Header from "../components/Header"
import StyledMap from "../components/StyledMap"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import About from "../components/About"
import Help from "../components/Help"
import Health from "../components/WomenHealth"

export default () => (
  <>
    <Layout>
      <Header height={500} />
      <About maxChars={250}/>
      <Help maxChars={250}/>
      <Health maxChars={250}/>
      <StyledMap />
      <Footer />
    </Layout>
  </>
)
