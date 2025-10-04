import Express   from "express";
import cors from "cors";
import downloadService from "./routes/download.js";
const app = Express();
 app.use(Express.json());
 app.use(cors());
 
 app.use("/download",downloadService);


  
 app.listen(4000);
   