import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import "./Header.css"

function Header() {

    const [inputValue, setInputValue] = useState("")

    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <>
            <div className='mobile-menu'>
                <div
                    className="mobile-holder-icon"
                    onClick={() => setMenuVisible(prev => !prev)}
                >
                    <FiMenu className='mobile-icon' />
                </div>
                <div className={menuVisible ? "mobile-holder-list-menu visible" : "mobile-holder-list-menu"}>
                    <div className="mobile-holder-links">
                    <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/favorites"}>Favorites</NavLink>
                    <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/all"}>All</NavLink>
                    <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/spot"}>Spot</NavLink>
                    <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/futures"}>Futures</NavLink>
                    <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/newListings"}>New Listings</NavLink>
                    <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/Ranking"}>Ranking</NavLink>
                    </div>
                    <div className="mobile-holder-search">
                    <div className="holder-search">
                            <FaSearch className='icon-search' />
                            <input
                                className='input-search'
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder='search'
                            />
                        </div>
                    </div>

                </div>
            </div>
                <div className="holder">

                    <div className="holder-left">
                        <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/favorites"}>Favorites</NavLink>
                        <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/all"}>All</NavLink>
                        <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/spot"}>Spot</NavLink>
                        <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/futures"}>Futures</NavLink>
                        <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/newListings"}>New Listings</NavLink>
                        <NavLink className={(link) => link.isActive ? "link active" : "link"} to={"/Ranking"}>Ranking</NavLink>
                    </div>
                    <div className="holder-right">
                        <div className="holder-search">
                            <FaSearch className='icon-search' />
                            <input
                                className='input-search'
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder='search'
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Header