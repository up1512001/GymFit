import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { textTransform } from '@mui/system'

import { exercisesOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
                , exercisesOptions);

            // console.log(bodyPartsData)
            setBodyParts(['all', ...bodyPartsData]);
            // console.log(bodyParts)
        }
        fetchExercisesData();
    }, [])

    const handelSearch = async () => {
        if (search) {
            const exercisesData = await fetchData
                ('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
            // console.log(exercisesData)
            const searchExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchExercises);
            // console.log(exercises)
        }
    }

    return (
        <Stack alignItems="center" mt='37px'
            justifyContent="center" p='20px'>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="50px" textAlign="center">
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position="relative" mb='72px'>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700px', border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value
                            .toLowerCase())
                    }}
                    placeholder="Search Exercises"
                    type='text'
                />
                <Button className='search Exercises'
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: "absolute",
                        right: '0'
                    }}
                    onClick={handelSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBodyParts
                />
            </Box>
        </Stack>
    )
}

export default SearchExercises
