import React from "react"
import MyMap from "./Map"

const StyledMap = () => (
  <div
    style={{
      display: `flex`,
      width: '95%',
      justifyContent: `space-between`,
      margin: `2rem`,
      border: `1px solid white`,
      borderRadius: `0.5rem`,
    }}
  >
    <span style={{ margin: `4rem 3rem 1rem 3rem` }}>
      <h2>Térkép</h2>
      <p>Cím: 1067 Budapest, Teréz krt. 41. 1. emelet 4.</p>
      <span style={{ margin: `5rem` }}>
        <p>Megközelíthetőség: </p>
        <p>A Nyugati tértől 5 perc séta.</p>
      </span>
    </span>
    <div
      style={{
        display: `flex`,
        flexDirection: 'column',
        padding: `2rem`,
        margin: `2rem`,
      }}
    >
      <MyMap />
    </div>
  </div>
)

export default StyledMap