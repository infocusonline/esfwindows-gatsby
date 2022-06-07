import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

class Layout extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <InnerPage>{this.props.children}</InnerPage>
        </StyledPage>
        <Footer />
      </ThemeProvider>
    )
  }
}

const theme = {
  maxWidth: 'auto',
}

const StyledPage = styled.div`
  background: white;
  color: black;
`
const InnerPage = styled.div`
  /* border: 1px solid red; */
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
`

export default Layout
