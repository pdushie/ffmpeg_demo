const ffmpeg = require('fluent-ffmpeg'); // Gives functions to perform video conversions
const ffmpeg_static = require('ffmpeg-static'); // static (bundled) install of ffmpeg 
const ffprobe_static = require('ffprobe-static'); // static (bundled) install of ffprobe - gives status on the conversion

// tell fluent ffmpeg where our ffmpeg and ffprobe are
ffmpeg.setFfmpegPath(ffmpeg_static);
ffmpeg.setFfprobePath(ffprobe_static.path);

// load our target file
const targetVideoFile = __dirname + "/sample-10s.mp4"

console.log(targetVideoFile);

// try to convert to another video type
ffmpeg(targetVideoFile)
    .toFormat("mov")
    .on("progress", (progressObject)=>{
        console.log(progressObject)
    })
    .on("end", ()=>{
        console.log("File successfully converted")
    })
    .saveToFile(__dirname + "/sample-10s.mov")