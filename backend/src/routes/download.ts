
import engine from '../service/engine.js';
import fs from "fs"
  import { Router } from 'express';
  const download = Router();
  download.post("/" , async(req,res)=>{
    try { 
        const {url ,type} = req.body;
        if ( !url || !type ){
            res.json({
                message : "error pls provide valid  url and type !!!"
            })  
        }
        const doc:any = await engine (url ,type);
        
    
        res.download(doc,(err)=>{
            console.log(err);
        })
          fs.unlink(doc, (unlinkErr) => {
                if (unlinkErr) {
                    console.error('Error deleting file:', unlinkErr);
                }
            })
       

    } catch (error) {
        console.log(error);
    } 

  })
  export default download;
    