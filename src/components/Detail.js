import React, { useState } from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';



const Detail = ({ exercisesDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exercisesDetail;
    // console.log(exercisesDetail)


    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return (
        <Stack gap='60px' sx={{
            flexDirection: { lg: 'row' },
            p: '20px', alignItems: 'center'
        }}>
            <img src={gifUrl} alt={name} Loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h3'>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Exercises keep you strong.{name}<br />
                    is one of the best exerises to target {target}.<br />
                    it will improve your mood and gain energy
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction='row'
                        gap='24px' alignItems='center'>
                        <Button sx={{
                            background: '#fff2db'
                            , borderRadius: '50%',
                            width: '100px',
                            height: '100px'
                        }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography variant='h5' textTransform='capitalize'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail
