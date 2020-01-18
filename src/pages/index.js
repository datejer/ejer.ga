import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.p`
  margin: 0;
  font-size: 15em;
  text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 375px) {
    font-size: 12em;
  }
`

const Home = () => (
  <Layout>
    <SEO title="home" />
    <Container>
      <Name>ejer</Name>
    </Container>
  </Layout>
)

export default Home
