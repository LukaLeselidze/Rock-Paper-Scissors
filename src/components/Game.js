import React, { useEffect, useState } from 'react'
import iconpaper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import './Game.css'
import { Link } from 'react-router-dom'



function Game({ myChoice, score, setScore }) {



    const [house, setHouse] = useState('');
    const [playerWin, SetPlayerWin] = useState('');

    const newHousePick = () => {
        const choices = ['paper', 'rock', 'scissor']
        setHouse(choices[Math.floor(Math.random() * 3)])
    }

    useEffect(() => {
        newHousePick()
    }, [])

    const Result = () => {
        if (myChoice === 'rock' && house === 'scissor' || myChoice === 'paper' && house === 'rock' || myChoice === 'scissor' && house === 'paper') {
            setScore(score + 1)
            SetPlayerWin('true')
        } else if (myChoice === 'rock' && house === 'paper' || myChoice === 'paper' && house === 'scissor' || myChoice === 'scissor' && house === 'rock') {
            setScore(score - 1)
            SetPlayerWin('false')

        } else {
            SetPlayerWin('draw')
        }
    }

    useEffect(() => {
        Result()
    }, [house])


    return (
        <>
            <div className='container'>
                <div className='flex'>
                    <h1>You Picked</h1>
                    <div className='circle' >
                        <div className={`icon icon-${myChoice}`}>
                            <img className='last-image' src={`../lastimages/${myChoice}.svg`}></img>
                        </div>
                    </div>
                </div>
                <div className='result'>
                    {playerWin == 'true' && <h1>You Win</h1>}
                    {playerWin == 'false' && <h1>You Lose</h1>}
                    {playerWin == 'draw' && <h1>Draw</h1>}
                    <Link to='/'> Play Again</Link>
                </div>
                <div className='second-flex'>
                    <h1>House Picked</h1>
                    <div className='circle'>
                        <div className={`icon icon-${house} `}>
                            <img className='last-image' src={`../lastimages/${house}.svg`}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* /* my choice: {myChoice}
            house choice: {house}
            {playerWin == 'true' && <p>You win</p>}
            {playerWin == 'false' && <p>You Lost</p>}
    {playerWin == 'draw' && <p>Draw</p>} */ }


export default Game