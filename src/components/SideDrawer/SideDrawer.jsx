import React, { useState, useSyncExternalStore } from 'react';
import './SideDrawer.css';
import { FiHome } from 'react-icons/fi';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FiTrendingUp } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { BiHelpCircle } from 'react-icons/bi';



function SideDrawer({ allVideos, showDrawer, setShowDrawer }) {


    return (
        <div className='sideDrawerContainer' style={showDrawer ? { width: '16%' } : { width: 'auto' }}>
            <div className="upperPart">
                <div className="options" style={showDrawer ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }}>
                    <FiHome className='optionsIcon' />

                    {showDrawer && (
                        <span>Home</span>
                    )}
                </div>

                <div className="options" style={showDrawer ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }}>
                    <BsFillPersonCheckFill className='optionsIcon' />

                    {showDrawer && (
                        <span>Editors Pick</span>
                    )}
                </div>

                <div className="options" style={showDrawer ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }}>
                    <FiTrendingUp className='optionsIcon' />

                    {showDrawer && (
                        <span>Trending</span>
                    )}
                </div>
            </div>

            <div className="middlePart" style={showDrawer ? { paddingTop: '0' } : { paddingTop: '1rem' }}>
                {showDrawer && (
                    <div className="header">My Subscriptions</div>
                )}

                {allVideos && (
                    allVideos.map((v,index) => {

                        return (
                            <div className="subscription" key={index} style={showDrawer ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }}>
                                <span>
                                    <img src={v.creator.pic} alt="person" />
                                </span>

                                {showDrawer && (
                                    <span>{v.creator.name}</span>
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            <div className="lowerPart">
                <div style={showDrawer ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }}>
                    <FiSettings className='lowerIcon' />
                    {showDrawer && (
                        <span>Settings</span>
                    )}
                </div>

                <div style={showDrawer ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }}>
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