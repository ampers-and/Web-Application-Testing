import React, {useState} from 'react';

export default function Dashboard(){

    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(0);
    console.log('strike:', strike,'ball:', ball, 'foul:', foul, 'hit:', hit)


    return(
        <div className='buttons'>
            <button onClick={() => setStrike(strike + 1)}>Strike</button>
            <button onClick={() => setBall(ball + 1)}>Ball</button>
            <button onClick={() => setFoul(foul + 1)}>Foul</button>
            <button onClick={() => setHit(hit + 1)}>Hit</button>
        </div>
    )
}