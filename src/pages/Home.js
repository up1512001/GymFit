import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
// import ExcercisesAge from '../components/ExcercisesAge';
// import Navbar from '../components/Navbar';

const Home = ({age}) => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([]);

    console.log(`home : ${age}`);
    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            {age === 0 && <Exercises setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises}
            />}
            {age === 20 && <Exercises setExercises={setExercises}
                bodyPart={'back'}
                exercises={exercises}

            />}
            {age === 40 && <Exercises setExercises={setExercises}
                bodyPart={'cardio'}
                exercises={exercises}

            />}
            {age === 60 && <Exercises setExercises={setExercises}
                bodyPart={'abs'}
                exercises={exercises}

            />}
        </Box>
    )
}

export default Home
