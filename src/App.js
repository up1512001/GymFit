import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import { exercisesOptions, fetchData } from './utils/fetchData'
import './App.css'
import Talk from './chat/App';
const App = () => {
    // const fetchExercisesData = async () => {
    //     const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
    //         , exercisesOptions);

    //     console.log(bodyPartsData)
        
    //     // console.log(bodyParts)
    // }
    // fetchExercisesData()

    const [age, setAge] = useState('0');
    const [level,setLevel] = useState('0');
    const [imageclicked,setImageclicked] = useState(0);
    
    useEffect(()=>{
        console.log(`App : ${age}`);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
    },[age])

    useEffect(()=>{
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
    },[level])
    console.log(imageclicked);
    console.log(`app :${age}`);
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
            <Navbar setAge={setAge}  setImageclicked={setImageclicked} setLevel={setLevel} />
            {console.log(`app : ${age}`)}
            {imageclicked === 0 && <Routes>
                <Route path="/" element={<Home age={age} level={level} />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>}
            {
            imageclicked===1 && 
            <Routes>
                <Route path="/" element={<Talk/>} />    
            </Routes>}
            <Footer />
        </Box>
    )
}

export default App
