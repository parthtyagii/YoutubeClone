import React from 'react';
import './Navbar.css';
import { RiVideoAddFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineSearch } from 'react-icons/hi';


function Navbar({ setShowDrawer, showDrawer }) {
    return (
        <div className='navbarContainer'>

            <div className="leftPart">
                <RxHamburgerMenu onClick={() => setShowDrawer(!showDrawer)} className='sideDrawer' />

                <span className="title">
                    MyTube
                </span>
            </div>

            <div className="middlePart">
                <input type="text" placeholder='Search' />

                <HiOutlineSearch className='searchIcon' />
            </div>

            <div className="rightPart">
                <RiVideoAddFill className='videoIcon' />

                <span className="userPic">
                    <img src="https://res.cloudinary.com/dw0up71e2/image/upload/v1680624926/he1pbxk1wdwimata2io4.jpg" alt="user_pic" />
                </span>
            </div>

        </div>
    );
};

export default Navbar;