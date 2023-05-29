import React, { useEffect, useState } from 'react';
import './Main.css';
import SideDrawer from '../SideDrawer/SideDrawer';
import Video from '../Video/Video';
import axios, { all } from 'axios';



function Main({ showDrawer, setShowDrawer }) {

    const [allVideos, setAllVideos] = useState(null);
    const [page, setPage] = useState(1);

    const getAllVideo = async () => {
        try {
            const response = await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
            // console.log(response.data.data.posts);
            setAllVideos(response.data.data.posts);
        }
        catch (err) {
            console.log(err);
        }
    };

    const nextPage = () => {
        if (page < 9) {
            setPage(page + 1);
        }
        else {
            return;
        }
    }

    const prevPage = () => {
        if (page == 1) {
            return;
        }
        else {
            setPage(page - 1);
        }
    }

    useEffect(() => {
        getAllVideo();
    }, [page]);

    return (
        <main>
            <SideDrawer allVideos={allVideos} showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

            <div className="videoDisplaySection" style={showDrawer ? { paddingLeft: '2rem', paddingRight: '2rem' } : {}}>
                <div className="videoCategories" style={showDrawer ? { width: '100%' } : { width: '85%' }}>
                    <div className="category">All</div>
                    <div className="category">News</div>
                    <div className="category">Viral</div>
                    <div className="category">Gaming</div>
                    <div className="category">Podcast</div>
                    <div className="category">Leaderboard</div>
                </div>

                <div className="videoSuggestions" style={showDrawer ? { width: '100%' } : { width: '85%' }}>
                    <div className="allVideos">
                        {allVideos && (
                            allVideos.map((v, index) => {
                                return (
                                    <Video data={v} key={Math.random()} />
                                );
                            })
                        )}
                    </div>

                    <div className="pagination">
                        <button onClick={() => prevPage()}>{'<'}</button>
                        <div className="pageCount">{page}</div>
                        <button onClick={() => nextPage()}>{'>'}</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
