import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'

const NewsContent = () => {
  return (
    <Container maxWidth='md'>
        <div className="content">
            <div className='downloadMessage'>
                <span className='downloadText'>for best experience download use inshort app in your smartphone</span>
                <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="playstore" height='80%' />
                <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="appstore" height='80%' />

            </div>

        </div>
    </Container>
  )
}

export default NewsContent