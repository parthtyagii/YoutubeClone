import React, { useState } from 'react';
import './Video.css';
import Modal from '../Modal/Modal';




function Video({ data }) {

    const [playVideo, setPlayVideo] = useState(false);

    return (
        <>
            <div className='videoContainer'>
                <div className="thumbnail" onClick={() => setPlayVideo(true)}>
                    <img src={data.submission.thumbnail} alt="thumbnail" />
                </div>

                <div className="videoTitle" onClick={() => setPlayVideo(true)}>
                    {data.submission.title}
                </div>

                <div className="creatorInfo">
                    <span>
                        <img src={data.creator.pic} alt="creator" />
                    </span>
                    <span>{data.creator.name}</span>
                </div>
            </div>

            {playVideo && (
                <Modal data={data} setPlayVideo={setPlayVideo} />
            )}
        </>
    );
};

export default Video;