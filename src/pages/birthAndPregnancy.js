import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"
import Birth from "../components/Birth"

export default () => (
  <>
    <Layout>
      <Header height={300} />
      <Birth/>
      <Footer />
    </Layout>
  </>
)