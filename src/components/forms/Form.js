import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Layout from '../Layout'

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log(this.state)
    const { firstName } = this.state

    navigate('/quote-received', { state: { firstName } })
  }

  handleChange = event => {
    const { name, type, value } = event.target
    // console.log(event.target.value)
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }

  render() {
    return (
      <Layout>
        <Container>
          <FormContainer>
            <FormWrap>
              <p>
                Are you looking for more information? Please contact us at
                <a href="tel:877-467-8335"> 877-467-8335</a> or use our contact
                form
              </p>
              <h1>Contact Us</h1>
              <form
                data-netlify="true"
                name="contactUs"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <input type="hidden" name="contact" value="contact" />
                <FormGroup>
                  <label htmlFor="firstName">
                    First Name:
                    <input
                      name="firstName"
                      type="text"
                      id="firstName"
                      plaheholder="Your name"
                      autoComplete="off"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </label>
                </FormGroup>
                <FormGroup>
                  <label>
                    Last Name:
                    <input
                      name="lastName"
                      type="text"
                      id="lastName"
                      plaheholder="Smith"
                      autoComplete="off"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </label>
                </FormGroup>
                <FormGroup>
                  <label>
                    Email Address
                    <input
                      name="email"
                      type="email"
                      id="email"
                      plaheholder="Your name"
                      autoComplete="off"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </label>
                </FormGroup>
                <FormGroup>
                  <select
                    name="subject"
                    type="select"
                    value={this.subject}
                    onChange={this.handleChange}
                  >
                    Subject:
                    <option value="requestInfo">
                      {' '}
                      Request for Information
                    </option>
                    <option value="quoteRequest">Quote request</option>
                    <option value="errorReport">Error Report</option>
                    <option value="contentSugestion">Content Sugestion</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  Questions or Message
                  <textarea
                    cols={28}
                    rows={5}
                    id="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </form>
              <footer>
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  disabled={!this.state.email}
                >
                  Submit
                </button>
              </footer>
            </FormWrap>
          </FormContainer>
        </Container>
      </Layout>
    )
  }
}

const Container = styled.div`
  padding-top: 7rem;
`

const FormContainer = styled.div`
  border: 1px solid #2d385b;
  margin: 30px auto;
  max-width: 400px;
  padding: 20px;
`

const FormWrap = styled.div`
  padding: 25px 25px;
  background: white;
  box-shadow: 10%;
  color: #333;
  h1,
  p {
    text-align: center;
  }
  label {
    display: block;
    color: #2d385b;
  }
  input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
  }
  textarea {
  }
  button {
    display: block;
    width: 100%;
    background: #2d385b;
    margin-top: 20px;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
  }
`

const FormGroup = styled.div`
  margin-top: 15px;
  padding: 15px;
`

export default Form
