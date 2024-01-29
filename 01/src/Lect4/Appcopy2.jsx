import Video3 from "../components/Video3";
import videoDB from "../data/data.js";
import "../App.css";
import Counter from "../components/Counter.jsx";
import PlayButton from "../components/PlayButton.jsx";
import { useState } from "react";

function Appcopy2() {
  const [videos, setVideos] = useState(videoDB)
  return (
    <>
      <div className="App" onClick={()=>console.log("App: event Bubbling")}>
        <div><button onClick={()=>{
         setVideos( [ ...videos,{
            id: videos.length+1,
            title: "SQL Tutorial",
            views: "9000",
            time: "6 months ago",
            channel: "PQR",
            verified: true,
          }]);
        }
        } >Add Video</button> </div>
        {videos.map((video) => (
          <Video3
            key={video.id}
            id={video.id}
            verified={video.verified}
            channel={video.channel}
            title={video.title}
            views={video.views}
            time={video.time}
          >
            <PlayButton
              onPlay={() => console.log("Playing", video.title)}
              onPause={() => console.log("Paused", video.title)}
            >
              {" "}
              {video.title}
            </PlayButton>
          </Video3> 
        ))}
        <div style={{ clear: "both" }}>
          {/* <PlayButton
            message="play-msg"
            onPlay={() => console.log("play")}
            onPause={() => console.log("pause")}
          > 
            Play
          </PlayButton>
        */}
          {/* <PlayButton message="pause-msg" onClick={()=>alert("playyy")}>Pause</PlayButton> */}
        </div>

        <Counter></Counter>
      </div>
    </>
  );
}
export default Appcopy2;
