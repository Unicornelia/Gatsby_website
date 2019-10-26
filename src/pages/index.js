import React from "react"
import Header from "../components/Header"
import StyledMap from "../components/StyledMap"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import About from "../components/About"

export default () => (
  <>
    <Layout>
      <Header height={500} />
      <About height="50%" />
      <StyledMap />
      <Footer />
    </Layout>
  </>
)
