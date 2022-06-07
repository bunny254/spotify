const mongoose=require('mongoose');


module.exports=async()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        await mongoose.connect(process.env.URI, connectionParams);
        console.log("Successfully connected to the DB");
        
    } catch (error) {
        console.log(error); 
    }
}