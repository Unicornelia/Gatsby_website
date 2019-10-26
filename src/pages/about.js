import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "../components/About"

export default () => (
  <Layout>
    <Header height={300} />
    <About />
    <Footer />
  </Layout>
)
