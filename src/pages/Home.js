import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
// import ExcercisesAge from '../components/ExcercisesAge';
// import Navbar from '../components/Navbar';

const Home = ({age,level}) => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([]);

    console.log(`home : ${age}`);
    console.log(`home : ${level}`);

    const exerciseArr = ['shoulders','back','cardio','chest','waist','upper arms','lower legs']
    const ageArr = ['0','20','40','60']
    const levelArr = ['0','1','2','3']

    let ind1=-1;
    let ind2 = -1;
    for(var i=0;i<ageArr.length;i++){
        if(age===ageArr[i]){
            ind1=i;
            break;
        }
    }
    for(var i=0;i<levelArr.length;i++){
        if(level===levelArr[i]){
            ind2=i;
            break;
        }
    }

    return (
        <Box>
            <HeroBanner />
            <SearchExercises exercises={exercises} setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />

            <Exercises setExercises={setExercises} bodyPart={exerciseArr[ind1+ind2]} exercises={exercises} />

            {/* {age === '0' && <Exercises setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises}
            />}
            {age === '20' && <Exercises setExercises={setExercises}
                bodyPart={'shoulders'}
                exercises={exercises}

            />}
            {age === '40' && <Exercises setExercises={setExercises}
                bodyPart={'back'}
                exercises={exercises}

            />}
            {age === '60' && <Exercises setExercises={setExercises}
                bodyPart={'cardio'}
                exercises={exercises}

            />}
            {level==='0' && <Exercises setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises}

            /> }
            {level==='1' && <Exercises setExercises={setExercises}
                bodyPart={'cardio'}
                exercises={exercises}

            /> }
            {level==='2' && <Exercises setExercises={setExercises}
                bodyPart={'waist'}
                exercises={exercises}

            /> }
            {level==='3' && <Exercises setExercises={setExercises}
                bodyPart={'shoulders'}
                exercises={exercises}

            /> } */}
        </Box>
    )
}

export default Home
