import * as React from "react"
import { graphql } from 'gatsby'
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import DualInfoblock from "../components/reuseable/DualInfoblock"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="App" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="i write code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <DualInfoblock heading="Our Team"/>
  </Layout>
)
export const query=graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage
