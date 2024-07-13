const express=require('express');
const cors=require('cors');
const app=new express();
const PORT=4000;
const movieModel=require('./model/movieData');
require('./connection');
app.use(cors())
app.use(express.json())
//to fetch the movie data
app.get('/movies',async(req,res)=>{
    console.log('inside')
    try {
        const data= await movieModel.find();
        console.log(data)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//add a new document
app.post('/newmovie',async(req,res)=>{
    try {
            var item=req.body;
            const datasave=new movieModel(item);
            const saveddata= await datasave.save();
            res.send('Post successful');
       
    } catch (error) {
        console.log(error)
    }
})

//delete a document
app.delete('/movieremoval/:id',async(req,res)=>{
    try {
        await movieModel.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully')
    } catch (error) {
        console.log(error)
    }
    
})
//update a document
app.put('/movie-updation/:id',async (req,res)=>{
    try {
     const data= await movieModel.findByIdAndUpdate(req.params.id,req.body);
     res.send('Updated successfully')
    } catch (error) {
     console.log(error)
    }
 })

app.listen(PORT,()=>{
    console.log('Server is running on PORT 4000')
})