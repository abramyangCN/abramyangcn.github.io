// Gatsby supports TypeScript natively!

import React, { useState } from "react"
import { PageProps, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cover from "../components/svgIcons/Cover"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Home = ({ data, location }: PageProps<Data>): JSX.Element => {
  const [isLoading, setIsLoading]: [any, any] = useState(true)
  const { title: siteTitle } = data.site.siteMetadata

  setTimeout(() => setIsLoading(false), 2000)
  return (
    <div>
      <Cover loaded={!isLoading} />
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />

        <Bio />
      </Layout>
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
