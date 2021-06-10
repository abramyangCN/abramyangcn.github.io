import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PrimarySearchAppBar from "./PrimarySearchAppBar"
import Container from "@material-ui/core/Container"
import Skeleton from "@material-ui/lab/Skeleton"
import { StaticImage } from "gatsby-plugin-image"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import { red, indigo } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#536dfe",
    },
    secondary: red,
  },
})

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navs {
            name
            path
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const { navs } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <div data-is-root-path={isRootPath}>
        <PrimarySearchAppBar pages={navs} siteName={title} />
        <div className="banner">
          <StaticImage
            layout="fullWidth"
            src="../images/port.jpg"
            alt="Profile picture"
          />
        </div>
        <Container fixed>{children}</Container>
        <footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
