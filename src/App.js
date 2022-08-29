import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

import './App.css'

const App = () => {
    const [age, setAge] = useState('');
    console.log(`app :${age}`);
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
            <Navbar setAge={setAge} age={age} />
            {console.log(`app : ${age}`)}
            <Routes>
                <Route path="/" element={<Home age={age} />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App
