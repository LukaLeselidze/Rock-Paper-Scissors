import React from 'react'
import './Header.css'
import logo from '../images/logo.svg'


function Header({ score }) {
    return (
        <div className='header'>
            <div className='header-container'>
                <img src={logo}></img>
                <div className='score'>
                    <p>Score</p>
                    <h1>{score}</h1>
                </div>
            </div>
        </div>
    )
}

export default Header