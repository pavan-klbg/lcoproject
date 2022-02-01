import * as React from "react"
import { graphql } from 'gatsby'
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import DualInfoblock from "../components/reuseable/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"

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
    <Coursecart courses={data.courses}/>
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
  
  courses:allContentfulCourses{
edges  {
node{
  id
 title
 price
 category
 description {
   description
     }
 image {
  gatsbyImageData
   
   
   
 }
   }
 }
   }

}
`
export default IndexPage
