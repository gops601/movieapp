import React, { useEffect, useState } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Table } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const View = () => {
    const [rows,setRows]=useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:4000/movies').then((res)=>{
            //console.log(res);
            setRows(res.data);
          })

    },[])
    
    function deleteMovie(p)
    {
      axios.delete('http://localhost:4000/movieremoval/'+p).then((res)=>{
        alert('Data deleted');
        window.location.reload()
       
      }).catch((error)=>{
        console.log(error)
      })
    
    }
     const navigate=useNavigate()
    function updateMovie(movie) {
      navigate('/add',{state:{movie}})
    }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Movie Name</TableCell>
          <TableCell align="right">Director</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Release Year</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.movieName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.movieDirector}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            <TableCell align="right"><Button variant="contained" color="secondary" onClick={()=>{
      updateMovie(row)
    }}>
 Edit
</Button></TableCell>
            <TableCell align="right"><Button variant="contained" color="error" onClick={()=>{
      deleteMovie(row._id)
    }}>
  Delete
</Button></TableCell>
           </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View