import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PrimarySearchAppBar from "./PrimarySearchAppBar"
import Container from "@material-ui/core/Container"
import Skeleton from "@material-ui/lab/Skeleton"
import { StaticImage } from "gatsby-plugin-image"

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
    <div data-is-root-path={isRootPath}>
      <PrimarySearchAppBar pages={navs} siteName={title} />
      <div className="banner">
        <StaticImage
          layout="fullWidth"
          src="https://via.placeholder.com/1920x768/232129"
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
  )
}

export default Layout
