import Video from "./components/Video";
import "./App.css"

function App() {

  let obj = {
    title: "MongoDB Tutorial",
    views: "8562",
    time: "6 months aga",
    channel: "ABCXYZ",
    verified: false
  }

   return (
    <>
    <div className="App">
         <Video verified={true} channel="ABC" title="React JS Tutorial" views="9562" time="1 Year ago" />
         <Video verified={false} channel="ABCXYZ" title="HTML Tutorial" views="8000" time="1 Year ago"/>
       <Video {...obj}/>
       </div>
    </>
  );
}
export default App



