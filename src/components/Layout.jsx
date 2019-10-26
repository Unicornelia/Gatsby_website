import React from "react"
import NavComponent from "./NavComponent"
import { StyledLayoutContainer } from "./styles"

export default ({ children }) => (
  <StyledLayoutContainer>
    <NavComponent />
    {children}
  </StyledLayoutContainer>
)
