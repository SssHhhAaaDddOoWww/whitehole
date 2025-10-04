import Express   from "express";
import cors from "cors";
import download from "./routes/download.js";
const app = Express();
 app.use(Express.json());
 app.use(cors());
 
 app.use("/download",download);


  
 app.listen(4000);
   