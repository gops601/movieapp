const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@mycluster.rxtlcxm.mongodb.net/moviedb?retryWrites=true&w=majority&appName=MyCluster').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})