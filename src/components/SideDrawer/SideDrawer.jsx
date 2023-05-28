import React, { useState, useSyncExternalStore } from 'react';
import './SideDrawer.css';
import { FiHome } from 'react-icons/fi';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FiTrendingUp } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { BiHelpCircle } from 'react-icons/bi';



function SideDrawer() {

    const [showDrawer, setShowDrawer] = useState(true);

    return (
        <div className='sideDrawerContainer'>
            <div className="upperPart">
                <div className="options">
                    <FiHome className='optionsIcon' />

                    {showDrawer && (
                        <span>Home</span>
                    )}
                </div>

                <div className="options">
                    <BsFillPersonCheckFill className='optionsIcon' />

                    {showDrawer && (
                        <span>Editors Pick</span>
                    )}
                </div>

                <div className="options">
                    <FiTrendingUp className='optionsIcon' />

                    {showDrawer && (
                        <span>Trending</span>
                    )}
                </div>
            </div>

            <div className="middlePart">
                {showDrawer && (
                    <div className="header">My Subscriptions</div>
                )}

                <div className="subscription">
                    <span>
                        <img src="https://pbs.twimg.com/card_img/1659215351601676289/FkXZ6ew3?format=jpg&name=900x900" alt="person" />
                    </span>

                    {showDrawer && (
                        <span>Cleo Abrahm</span>
                    )}
                </div>

                <div className="subscription">
                    <span>
                        <img src="https://pbs.twimg.com/card_img/1659215351601676289/FkXZ6ew3?format=jpg&name=900x900" alt="person" />
                    </span>

                    {showDrawer && (
                        <span>Cleo Abrahm</span>
                    )}
                </div>

                <div className="subscription">
                    <span>
                        <img src="https://pbs.twimg.com/card_img/1659215351601676289/FkXZ6ew3?format=jpg&name=900x900" alt="person" />
                    </span>

                    {showDrawer && (
                        <span>Cleo Abrahm</span>
                    )}
                </div>
            </div>

            <div className="lowerPart">
                <div>
                    <FiSettings className='lowerIcon' />
                    {showDrawer && (
                        <span>Settings</span>
                    )}
                </div>

                <div>
                    <BiHelpCircle className='lowerIcon' />
                    {showDrawer && (
                        <span>Help</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideDrawer;