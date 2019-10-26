import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import StyledMap from "../components/StyledMap"

export default () => (
  <Layout>
    <Header
      height={300}
    />
    <StyledMap/>
    <Footer/>
  </Layout>
)
