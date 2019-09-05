import React, {useState} from 'react';
import Dashboard from './Dashboard';

export default function Display(){

    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    console.log('Balls: ', balls);
    console.log('Strikes: ', strikes);

    return(
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div>
                        <h2 className="title">Balls</h2>
                        <div className="score">{balls}</div>
                    </div>
                    <div>
                        <h2 className="title">Strikes</h2>
                        <div className="score">{strikes}</div>
                    </div>
                </div>
                <Dashboard />
            </section>
        </div>
    )
}