import React, { useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'

const Add = () => {
  const [form,setForm]=useState(
    {
      movieName:'',
      movieDirector:'',
      category:'',
      releaseYear:''

    }
  )

 var navigate=useNavigate();
 
  function valueFetch(e)
  {
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }

  const location=useLocation()
  let sendData=()=>{
   // console.log(form)
   if (location.state!=null) {
    axios.put('http://localhost:4000/movie-updation/'+location.state.movie._id,form).then((res)=>{
      alert('Data updated');
      navigate('/')
    }).catch((error)=>{
      console.log(error);
    })
  } 
  else{
    axios.post('http://localhost:4000/newmovie',form).then((res)=>{
     // alert('Data added')
      navigate('/')
   
    }).catch((error)=>{
      console.log(error)
    })
  }
}
useEffect(()=>{
  if(location.state!=null){
    setForm({...form,
      movieName:location.state.movie.movieName,
      movieDirector:location.state.movie.movieDirector,
  category:location.state.movie.category,
 releaseYear:location.state.movie.releaseYear
    })
  }
},[])
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required - Movie Name"
         // defaultValue="Hello World"
         name="movieName"
         value={form.movieName}
         onChange={valueFetch}
        />
        <br/>
        <TextField
           required
           id="outlined-required"
           label="Required- Director"
           name="movieDirector"
           value={form.movieDirector}
           onChange={valueFetch}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required - category"
          name="category"
          value={form.category}
          onChange={valueFetch}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          type='number'
          label="Required - Release Year"
          name="releaseYear"
          value={form.releaseYear}
          onChange={valueFetch}
        />
        <br/>
        <Button variant="contained" color="success" onClick={sendData}>
  Submit
</Button>
<br/>

          </div>
          </Box>
  )
}

export default Add