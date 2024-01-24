import Video2 from "./components/Video2";
import videos from "./data/data.js"
import "./App.css"


function Appcopy() {
  // in the previous App.jsx we were using Video component repeatedly. What if we are working on an application which have thousands of thumbnails? Do we need to write it thousands of time??===> NOOOOO


  // let videos = [{
  //   id: 1,
  //   title: "React Tutorial",
  //   views: "9562",
  //   time: "6 months aga",
  //   channel: "ABCXYZ",
  //   verified: true
  // },
  // {
  //   id: 2,
  //   title: "HTML Tutorial",
  //   views: "8000",
  //   time: "6 months aga",
  //   channel: "ABCXYZ",
  //   verified: false
  // },
  // {
  //   id: 3,
  //   title: "MongoDB Tutorial",
  //   views: "8562",
  //   time: "6 months aga",
  //   channel: "ABCXYZ",
  //   verified: false
  // }]

  return ( 
    <>
      <div className="App">
        <div>Videos</div>
        {
          videos.map((video) =><Video2 key={video.id} id={video.id} verified={video.verified} channel={video.channel} title={video.title} views={video.views} time={video.time} />)
        }


      </div>
    </>
  );
}
export default Appcopy



