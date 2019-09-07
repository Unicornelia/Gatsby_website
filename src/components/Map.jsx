import React, { Component } from "react"
import Iframe from "react-iframe"

class MyMap extends Component {
  render() {
    return (
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.074635906316!2d19.057712415627027!3d47.507937679178255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc729dd44a83%3A0x8aae01cb814c7bdb!2sBudapest%2C+Ter%C3%A9z+krt.+41%2C+1067+Hungary!5e0!3m2!1sen!2suk!4v1469375920005"
        width="700"
        height="450"
        frameborder="0"
        style={{ border: `0` }}
        allowfullscreen
      />
    )
  }
}

export default MyMap
