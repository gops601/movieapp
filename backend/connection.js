const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password@mycluster.rxtlcxm.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=MyCluster').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})
