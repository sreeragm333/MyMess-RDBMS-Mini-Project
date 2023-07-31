import messBillSer from '../services/messBillSer.js'
 async function calculateAndUpdate(req,res){
    try{
      await messBillSer();
      res.status(200).json({message : "Bills calculated and updated successfully"})
    }catch(error){
      res.status(500).json({error : "Internal server error"});
    }
  }
  
   export default calculateAndUpdate