import * as React from "react"
import { graphql } from 'gatsby'
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import DualInfoblock from "../components/reuseable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"


const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="LearnCodeOnline"
      subtitle=""
      heroclass="about-background"
    />
    <Infoblock heading="A message from CEO"/>
    <DualInfoblock heading="Our Vision"/>
    <Teamphotosection/>
  </Layout>
)
export const query=graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
