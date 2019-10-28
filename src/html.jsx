import React from "react"
import favicon from "../src/images/psy.png"

function HTML(props) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={favicon} />
      <title>Szita Bernadett</title>
    </head>
    <body>
    <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
    </body>
    </html>
  )
}