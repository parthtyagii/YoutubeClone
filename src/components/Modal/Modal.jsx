import React from 'react';
import './Modal.css';
import { VscClose } from 'react-icons/vsc';



function Modal({ data, setPlayVideo }) {

    return (
        <div className='videoPlayerContainer'>
            <div className="extra">
                <div className="videoPlayer">

                    <button className='close'>
                        <VscClose onClick={() => setPlayVideo(false)} />
                    </button>

                    <div className="video">
                        <video controls autoPlay loop width='200px'>
                            <source src={data.submission.mediaUrl} />
                        </video>
                    </div>

                    <div className="videoTitle">{data.submission.title}</div>

                    <div className="videoDescription">{data.submission.description}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;