import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Stack, MenuItem, Select, FormControl, InputLabel, NativeSelect } from '@mui/material'

import Logo from '../assets/images/Logo.png'
import Profile from '../assets/images/Profile.png'
import Exercises from './Exercises';
import { Block } from '@mui/icons-material';
import NewFile from './NewFile';
import ExercisesAge from './ExcercisesAge';
import App from '../chat/App';
const Navbar = ({ setAge,setImageclicked,setLevel }) => {
    // const [navAge, setnavAge] = useState('');
    // const [level, setLevel] = useState();
    const [bodyPart, setBodyPart] = useState('back')
    const [exercises, setExercises] = useState([]);

    // const [bodyPart, setBodyPart] = useState('cardio')
    // const [exercises, setExercises] = useState([]);

    // const checkExercise = (e) => {
    //     // (e.target.vlaue === 18) ? console.log("dbfjdbfj") : (<NewFile />)
    // useEffect(() => {
    //     console.log(navAge);
    //     setAge(navAge);
    // }, [navAge])
    // // }

    // console.log(navAge);
    return (
        <div style={{ display: 'flex', backgroundColor: '#3AFFDD', height: '67px', paddingTop: '1px' }}>
            <Stack
                direction="row"
                justifyContent="space-around"
                sx={{
                    gap: { sm: '54px', xs: '40px' },
                    mt: { sm: '-16px', xs: '1px' },
                    justifyContent: 'none'
                }} px='20px'>
                <Link to="/" alt="logo" style={{
                    width: '48px'
                    , height: '48px', marginTop: '22px'
                }}>
                    <img onClick={()=>{setImageclicked(0)}} src={Logo} />
                </Link>
                <Stack
                    direction="row"
                    gap="40px"
                    fontSize="24px"
                    // alignItem="flex-end"
                    sx={{
                        gap: { sm: '53px', xs: '40px' },
                        mt: { sm: '32px', xs: '1px' },
                        justifyContent: 'none'
                    }}
                >
                    <Link to="/" style={{
                        textDecoration: 'none'
                        , color: '#3A1212',
                        borderBottom: '3px solid #FF2625',
                        height: '32px'
                    }}>Home</Link>
                    <a href="#exercises" style={{
                        textDecoration: 'none'
                        , color: '#3A1212'
                    }}>
                        Exercises
                    </a>

                    <FormControl fullWidth>
                        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Catagory
                        </InputLabel> */}
                        <NativeSelect
                            // defaultValue={0}
                            // inputProps={{
                            //     name: 'age',
                            //     id: 'uncontrolled-native',
                            // }}
                        onChange={(e) => { setAge(e.target.value) }}
                        >
                            <option value={'0'} >Catagory</option>
                            <option value = {'20'} >Below 18</option>
                            <option value = {'40'}> 18 - 45</option>
                            <option value={'60'} > Above 45</option>
                            {/* {console.log(`setage : ${age}`)} */}
                        </NativeSelect>
                    </FormControl>

                    <FormControl fullWidth>
                        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Catagory
                        </InputLabel> */}
                        <NativeSelect
                            defaultValue={3}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        onChange={(e) => { setLevel(e.target.value) }}
                        
                        >
                            <option value={'0'}>Level</option>
                            <option value={'1'}>Beginner</option>
                            <option value={'2'}>Intermediate</option>
                            <option value={'3'}>Advance</option>
                        </NativeSelect>
                    </FormControl>

                </Stack>

            </Stack >
            <Link to="/" alt="logo" style={{
                width: '48px'
                , height: '48px', marginTop: '7px',
                position: 'absolute', right: '29px'
            }}>
                <img src={Profile} onClick={()=>{setImageclicked(1)}} style={{ height: '50px', width: '50px' }} />
            </Link>

        </div >
    )
    // console.log(age)
}

export default Navbar
