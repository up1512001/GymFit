import { Checkbox , FormControl , RadioGroup , FormControlLabel,FormLabel,Radio,Button} from '@mui/material';
import React from 'react';
import  ReactDOM  from "react-dom";
import { render } from 'react-dom';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const element = <App/>

async function AppClicked () {
    console.log("hello world");
    // render(
    //     <App/>
    // )
    
}
const HomePage = () => {
    return(
        
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Home Page</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="0 to 20 Age Group"
                name="radio-buttons-group"
                >
                <FormControlLabel value="female" control={<Radio />} label="0 to 20 Age Group" />
                <FormControlLabel value="male" control={<Radio />} label="21 to 40 Age Group" />
                <FormControlLabel value="other" control={<Radio />} label="40+ Age Group" />
                <FormControlLabel control={<Checkbox/>} label="Accept Terms and Conditions..." />
            </RadioGroup>
            <Button>
                Submit
            </Button>
            
        </FormControl>
        
    )
    
}

export default HomePage;