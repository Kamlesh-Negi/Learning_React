/* eslint-disable react/prop-types */
import './Video.css'

function Video({ title, channel = "ABC", views, time, verified, id }) {
    //  let verified = true;      // it is hard coded
    //  let channelJsx
    //    { if(verified)
    //     {
    //        channelJsx = <div className="channel">{channel} ✔</div>
    //     } else{
    //             channelJsx = <div className="channel">{channel}</div>
    //         }}

    return (
        <>
        <div className='container'>
        <div className='pic'>
                <img src={`https://picsum.photos/id/${id}/160/90`} width={140} height={150} alt="Image Loading" />
            </div>
            <div className="title">{title}</div>

            {/*<div className="channel">{channel}</div>*/}
            {/* { {channelJsx}} */}

            {/* {verified ? <div className="channel">{channel} ✔</div> : <div className="channel">{channel} </div>} ==========================--->not a good practice to repeat yourself.
            So we will just use ternary operator on the ✔ symbol<---========================

            <div className="channel">{channel} {verified ? "✔" : null} </div> */}

            {/*Short-circuit method===> use && --->if the left side is true then only it will go the right side otherwise it won't check the right side.
            NOTE:- Use carefully the short-circuit method. It will work differently with boolean and number type i.e. it will show 0 if verified=0 and will show "✔" for all the value other than 0*/}

            <div className="channel">{channel} {verified && "✔"}</div>


            <div className="views">{views} views <span>.</span>{time}</div>
        </div>
    </>
    )
}

export default Video

