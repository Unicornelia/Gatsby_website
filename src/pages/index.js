import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Footer from "../components/footer"
import StyledMap from "../components/styledMap"

export default () => (
  <>
    <Layout>
      <Header
        headerText="Szita Bernadett"
        subText="Klinikai szakpszichológus, relaxációs- és szimbólumterapeuta"
        headerPadding="10rem"
      />
      <StyledMap />
      <Footer />
    </Layout>
  </>
)
