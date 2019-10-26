import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
      marginBottom: `1rem`,
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const NavComponent = () => (
  <div style={{ padding: `1rem 2rem 0 1rem` }}>
    <div className="left-nav">
      <ul style={{ listStyle: `none`, float: `left` }}>
        <ListLink to="/">Kezdőlap</ListLink>
      </ul>
    </div>
    <div className="right-nav">
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">Magamról</ListLink>
        <ListLink to="/amibenSegithetek/">Amiben segithetek</ListLink>
        <ListLink to="/noiEgeszseg/">Női egészségpszichológia</ListLink>
        <ListLink to="/contact/">Kapcsolat</ListLink>
      </ul>
    </div>
  </div>
)

export default NavComponent
