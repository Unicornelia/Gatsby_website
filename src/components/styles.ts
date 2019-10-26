import styled from "@emotion/styled"
import Background from "../../static/images/5.jpg"

export const StyledFooterDiv = styled("div")({
  border: "1px solid white",
  padding: "1rem",
  margin: "2rem",
  textAlign: "center",
  backgroundImage: `url(${Background})`,
  borderRadius: "0.5rem",
})

type HeaderProps = {
  height: number
}

export const StyledHeaderDiv = styled("div")<HeaderProps>(
  props => ({ height: `${props.height}px` }),
  {
    display: "flex",
    flexDirection: "column",
    width: " 95%",
    justifyContent: "center",
    border: `1px solid white`,
    margin: `0 2rem 2rem 2rem`,
    padding: `5rem`,
    textAlign: `center`,
    backgroundImage: `url(${Background})`,
    borderRadius: `0.5rem`,
  }
)

export const StyledLayoutContainer = styled("div")({
  display: "flex",
  flexDirection: 'column',
})
