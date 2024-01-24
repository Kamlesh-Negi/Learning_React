import Video3 from "../components/Video3";
import videos from "../data/data.js";
//import "../index.css"
import "../App.css";
import PlayButton from "../components/PlayButton.jsx";

function Appcopy2() {
  return (
    <>
      <div className="App">
        <div>Videos</div>
        {videos.map((video) => 
          <Video3
            key={video.id}
            id={video.id}
            verified={video.verified}
            channel={video.channel}
            title={video.title}
            views={video.views}
            time={video.time}
          />
          )}
          <div style={{clear:'both'}}>
          <PlayButton/>
          </div>
      </div>
    </>
  );
}
export default Appcopy2;
