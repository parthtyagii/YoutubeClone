import React from 'react';
import './Modal.css';
import { VscClose } from 'react-icons/vsc';



function Modal({ data, setPlayVideo }) {

    return (
        <div className='videoPlayerContainer'>
            <div className="videoPlayer">
                <button className='close'>
                    <VscClose onClick={() => setPlayVideo(false)} />
                </button>

                <div className="video">
                    <video controls autoPlay loop >
                        <source src={data.submission.mediaUrl} />
                    </video>
                </div>

                <div className="videoInfo">
                    <div className="videoTitle">{data.submission.title}</div>
                    <div className="videoCreator">Created by {data.creator.name}</div>
                    <div className="videoDescription">{data.submission.description}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;