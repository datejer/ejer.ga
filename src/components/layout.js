import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  text-align: center;
  width: 100%;
  font-size: 1.7em;
  margin: 0.2em 0;
  @media only screen and (max-width: 375px) {
    font-size: 1.5em;
  }
`

const Link = styled.a`
  color: #000;
  text-decoration: underline;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer>
        Made by <Link href="http://ejer.ga">me</Link>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
