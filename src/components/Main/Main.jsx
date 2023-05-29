import React, { useEffect, useState } from 'react';
import './Main.css';
import SideDrawer from '../SideDrawer/SideDrawer';
import Video from '../Video/Video';
import axios, { all } from 'axios';



function Main() {

    const [allVideos, setAllVideos] = useState(null);

    const getAllVideo = async () => {
        try {
            const response = await axios.get('https://internship-service.onrender.com/videos?page=1');
            console.log(response.data.data.posts);
            setAllVideos(response.data.data.posts);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllVideo();
    }, []);

    return (
        <div className='mainContainer'>

            <SideDrawer />

            <div className="videoSection">
                <div className="videoCategories">
                    <div className="category">All</div>
                    <div className="category">News</div>
                    <div className="category">Viral</div>
                    <div className="category">Gaming</div>
                    <div className="category">Podcast</div>
                    <div className="category">Leaderboard</div>
                </div>

                <div className="videoSuggestions">

                    {allVideos && (
                        allVideos.map((v, index) => {
                            return (
                                <Video data={v} key={Math.random()} />
                            );
                        })
                    )}

                </div>
            </div>
        </div>
    );
};

export default Main;
