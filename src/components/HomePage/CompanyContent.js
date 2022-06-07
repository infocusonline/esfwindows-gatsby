import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const CompanyContent = () => {
  // qurying with ID until i figure out how to make this dynamic
  // ID's wont change even if you edit content on drupal side
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "99420965-d45e-589c-810a-122e73f01155" }) {
        id
        title
        body {
          value
        }
        field_basic_page_link {
          title
        }
        fields {
          slug
        }
      }
    }
  `)
  const title = data.nodePage.title
  const body = data.nodePage.body.value
  const button = data.nodePage.field_basic_page_link[0].title

  return (
    <CompanyInfo>
      <h1>{title}</h1>
      <h3 dangerouslySetInnerHTML={{ __html: body }}></h3>
      <ButtonCenteredFlex>
        <StyledLink to={data.nodePage.fields.slug}>{button}</StyledLink>
      </ButtonCenteredFlex>
    </CompanyInfo>
  )
}

const CompanyInfo = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 20px;
  h1 {
    padding-top: 1.4rem;
    text-align: center;
  }
  h3 {
    line-height: 1.9;
    text-align: center;
    font-size: 19px;
    color: #848484;
    box-sizing: border-box;
  }
`

const ButtonCenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  margin-top: 50px;
  text-decoration: none;
  color: #2d385b;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ffff;

  &:hover {
    background-color: #274f8d;
    color: white;
  }
`
export default CompanyContent
