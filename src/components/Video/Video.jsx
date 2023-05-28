import React from 'react';
import './Video.css';




function Video() {
    return (
        <div className='videoContainer'>
            <div className="thumbnail">
                <img src="https://dj423fildxgac.cloudfront.net/66fd58de-24be-41c0-a1dd-ee7b3dbd3fb2" alt="thumbnail" />
            </div>

            <div className="videoTitle">The Impossible Task of Mapping Antarctica</div>
            <div className="creatorInfo">
                <span>
                    <img src="https://yt3.googleusercontent.com/ytc/AGIKgqOVBmzCi3g1GN3iO8IsGigl7femqIfupBD2Ze6bzQ=s900-c-k-c0x00ffffff-no-rj" alt="creator" />
                </span>
                <span>Jhonny Harris</span>
            </div>
        </div>
    );
};

export default Video;