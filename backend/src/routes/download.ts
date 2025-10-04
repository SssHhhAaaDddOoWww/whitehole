
import type { Request, Response } from 'express';
import engine from '../service/engine.js';
import fs from "fs"

export default async function downloadService(req:Request,res:Response) {
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
}
 