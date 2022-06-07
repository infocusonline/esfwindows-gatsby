import React from 'react'
import styled from 'styled-components'

class FormOptionTwo extends React.Component {
  state = {
    fullName: '',
    zipCode: '',
    phoneNumber: '',
    message: '',
  }
  render() {
    return (
      <FormParentContainer>
        <FormContainer>
          <FormWrap>
            <div>
              <h3>Are you looking for more information? Please, contact us</h3>
            </div>
            <form
              data-netlify="true"
              name="moreInfo"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="contact" value="contact" />

              <div>
                <label>
                  Full Name:
                  <input
                    name="fullName"
                    type="text"
                    id="fullName"
                    placeholder="full name"
                    autoComplete="off"
                    // value={'this.state.fullName'}
                    onChange={'this.handleChange'}
                  />
                </label>
              </div>

              <div>
                <label>
                  Zip code:
                  <input
                    name="zipCode"
                    type="text"
                    id="zipCode"
                    placeholder="zip code"
                    // value="this.state.zipCode"
                    onChange={'this.handleChange'}
                  />
                </label>
              </div>

              <div>
                <label>
                  phone:
                  <input
                    name="phoneNumber"
                    type="text"
                    id="phoneNumber"
                    // value="this.state.phoneNumber"
                    onChange={'this.handleCHange'}
                  />
                </label>
              </div>

              <div>
                <textarea
                  cols={28}
                  rows={50}
                  id="message"
                  name="message"
                  // value={'this.state.message'}
                  onChange={'this.handleChange'}
                />
              </div>
            </form>
            <footer>
              <button
                onClick={'this.handleSubmit'}
                type="submit"
                disabled={'!this.state.email'}
              >
                Submit
              </button>
            </footer>
          </FormWrap>
        </FormContainer>
      </FormParentContainer>
    )
  }
}

const FormParentContainer = styled.div`
  display: flex;
  flex-flow: wrap;

  p {
    padding: 100px;
    border: 1px solid red;
  }
`

const FormContainer = styled.div`
  margin: 0 auto;
  padding: 40px;
  max-width: 800px;
`

const FormWrap = styled.div`
  padding: 25px 25px;
  background: white;
  box-shadow: 10%;
  color: #333;

  h3,
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
    padding-top: 50px;
    border: 1px solid red;
    max-width: 400px;

    height: 120px;
    border: 3px solid #cccccc;
    padding: 5px;
    font-family: Tahoma, sans-serif;
    background-image: url(bg.gif);
    background-position: bottom right;
    background-repeat: no-repeat;
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

export default FormOptionTwo
