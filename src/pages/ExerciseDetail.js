import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exercisesOptions, youtubeOptions, fetchData } from '../utils/fetchData';
import Exercises from '../components/Exercises';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExcrciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
            // console.log(exerciseDetailData)
            setExerciseDetail(exerciseDetailData)
            // console.log(exerciseDetail)
            const exercisesVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            // console.log(exercisesVideosData)
            setExerciseVideos(exercisesVideosData.contents)

            const targetMuscleExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`
                , exercisesOptions);
            setTargetMuscleExercises(targetMuscleExercisesData)

            const equipmentExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`
                , exercisesOptions);
            setEquipmentExercises(equipmentExercisesData);
        }
        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exercisesDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />

        </Box>
    )
}

export default ExcrciseDetail
