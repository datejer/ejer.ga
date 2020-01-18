import React from "react"
import styled from "styled-components"

const Link = styled.a`
  margin: 0.5em;
  font-size: 2.5em;
  color: #000;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 375px) {
    font-size: 1.5em;
  }
`

const Navbar = styled.header`
  text-align: center;
  margin: 0.5em 0;
`

const Header = () => (
  <Navbar>
    <Link href="http://about.ejer.ga">about</Link>
    <Link href="http://projects.ejer.ga">projects</Link>
    <Link href="http://media.ejer.ga">media</Link>
    <Link href="http://blog.ejer.ga">blog</Link>
  </Navbar>
)

export default Header
