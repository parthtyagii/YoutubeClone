import React from 'react';
import './Main.css';
import SideDrawer from '../SideDrawer/SideDrawer';
import Video from '../Video/Video';



function Main() {
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

                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />

                </div>
            </div>
        </div>
    );
};

export default Main;
