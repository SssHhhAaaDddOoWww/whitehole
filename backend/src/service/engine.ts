import { exec } from "child_process";
import path from "path";



 enum Type  { 
    Audio  ="audio",
    Video  =  "video"
}

export default  function engine(url:string,type:Type){

    const filePath = path.join("downloads", `${Date.now()}.%(ext)s`);

    try {
       const command =
  type === "audio"
    ? `yt-dlp -x --audio-format mp3 -o "${filePath}" '${url}' `
    : `yt-dlp -f  bestvideo+bestaudio --merge-output-format mp4 --recode-video mp4 -o "${filePath}" '${url}' `;

      exec(command,(err,stdout,stderr)=>{
        if(err){
            console.log( "error occured while  buuilding !!")
            console.log(stderr);
        }
        console.log("output :", stdout);
    })
        
    }catch(error){
        console.log(error);
    }
   

}