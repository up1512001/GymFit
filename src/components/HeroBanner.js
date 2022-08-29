import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HerobannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position='relative' p="20px">
            <Typography color="#FF2625"
                fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{
                    fontSize: {
                        lg: '44px', xs: '40px'
                    }
                }}
                mb='23px' mt='30px'>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" LineHeight="35px"
                mb={3}>
                Check out the most effective exercises
            </Typography>
            <Button variant='contained' color='error'
                href="#exercises"
                sx={{ backgroundColor: '#ff2625' }}
                padding='10px'>
                EXplor Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#FF2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize='200px'
            >
                Exercises
            </Typography>
            <img src={HerobannerImage} alt='banner'
                className='hero-banner-img' />
            {/* <Link to="/" alt="logo" style={{
                width: '48px'
                , height: '48px', marginTop: '7px'
            }}>
                <img src={Logo} />
            </Link> */}
        </Box>
    )
}

export default HeroBanner
