import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Link, graphql, useStaticQuery } from 'gatsby'

const CollapseMenu = props => {
  const data = useStaticQuery(graphql`
    query {
      allMenuLinkContentMenuLinkContent(
        sort: { fields: [weight], order: ASC }
        filter: { description: { eq: "MainMenu" } }
      ) {
        edges {
          node {
            title
            fields {
              lowerCaseMenuTitle
            }
          }
        }
      }
    }
  `)

  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          {data.allMenuLinkContentMenuLinkContent.edges.map(edge => (
            <li>
              <Link
                to={`/${edge.node.fields.lowerCaseMenuTitle}`}
                onClick={props.handleNavbar}
              >
                {edge.node.title}
              </Link>
            </li>
          ))}
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;

  @media (min-width: 1121px) {
    display: none;
  }
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`

export default CollapseMenu
