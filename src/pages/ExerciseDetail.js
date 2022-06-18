import React , {useEffect , useState} from 'react';

import { useParams } from 'react-router-dom';

import {Box} from '@mui/material';

import { exerciseOptions , fetchData, youtubeOptions } from '../utils/fetchData';

import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});

  const [exerciseVideos,setexerciseVideos] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async() =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
     
      // console.log(exerciseDetailData);

      setExerciseDetail(exerciseDetailData);


      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);

      setexerciseVideos(exerciseVideosData.contents);


    }

    fetchExercisesData();

  },[id]);


  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
    
  )
}

export default ExerciseDetail