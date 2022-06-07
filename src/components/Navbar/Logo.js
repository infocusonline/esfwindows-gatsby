import React from 'react'

import styled from 'styled-components'
import logo from '../../assets/logo-light_72.png'
import { Link } from 'gatsby'



const Image = styled.img `
    height: 75%;
    margin: 10px 0 0 20px;
`


const Logo = () => {
    return(
        <>
            <Link to='/' src={logo} >
            <Image src={logo} alt='Company Logo' />

            </Link>
        </>
    )
}


export default Logo

