import React, { useState } from 'react'
import './GameSection.css'
import triangle from '../images/bg-triangle.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissor from '../images/icon-scissors.svg'
import { Link } from 'react-router-dom'

function GameSection({ setMyChoice }) {

    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id)
    }

    return (
        <>
            <div className='game-section'>
                <img src={triangle}></img>
            </div>

            <Link to='/game'>
                <div data-id='paper' onClick={setChoice} className='circle-paper'>
                    <img data-id='paper' onClick={setChoice} className='hands' src={paper}></img>
                </div>
            </Link>
            <Link to='/game'>
                <div data-id='scissor' onClick={setChoice} className='circle-scissors'>
                    <img data-id='scissor' onClick={setChoice} className='hands' src={scissor}></img>
                </div>
            </Link>
            <Link to='/game'>
                <div data-id='rock' onClick={setChoice} className='circle-rock'>
                    <img data-id='rock' onClick={setChoice} className='hands' src={rock}></img>
                </div>
            </Link>
        </>
    )
}

export default GameSection