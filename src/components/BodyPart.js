import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            textAlign='center'
            justifyContent="center"
            className="bodyPart-card"
            sx={
                {
                    borderTop: bodyPart === item ? '4px solid #ff2625' : "",
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer'
                }
            }
            onClick={() => {
                // console.log(bodyPart)
                setBodyPart(item);
                // console.log(bodyPart)
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={Icon} alt='icon'
                style={{ width: '40px', height: '40px', margin: 'auto' }} />
            <Typography fontSize='24px' fontWeight='bold'
                color="#3A1212"
                textTransform='capitalize' margin='auto'>{item}</Typography>
        </Stack>
    )
}

export default BodyPart
