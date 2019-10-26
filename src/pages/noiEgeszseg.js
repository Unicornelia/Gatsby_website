import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Health from "../components/WomenHealth"

export default () => (
  <Layout>
    <Header
      height={300}
    />
    <Health/>
    <Footer/>
  </Layout>
)
