/* eslint-disable react/prop-types */
import './Video.css'



function Video3({ title, channel = "ABC", views, time, verified,id, children }) {


return (
<>
<div className='container'>
    <div className='pic'>
        <img src={`https://picsum.photos/id/${id}/160/90`} width={140} height={150} alt="Image Loading" />
    </div>
    <div className="title">{title}</div>

    <div className="channel">{channel} {verified && "✔"}</div>

    <div className="views">{views} views <span>.</span>{time}</div>
    
    <div>{children}</div>
</div>
</>
    )
}

export default Video3
