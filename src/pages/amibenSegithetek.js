import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Help from "../components/Help"

export default () => (
  <Layout>
    <Header
      height={300}
    />
    <Help />
    <Footer/>
  </Layout>
)
