import React, { useState } from 'react'
import './Footer.css'
import Modal from './Modal'

function Footer() {
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <>
            <footer onClick={toggle} className="footer">
                <h2 >
                    Rules
                </h2>
            </footer>
            {modal ? <Modal toggle={toggle} /> : null}
        </>
    );
};

//     return (
//         <>
//             <div onClick={toggle} className='footer'>
//                 <h2>Rules</h2>
//                 <div>{modal ? <Modal /> : null}</div>
//             </div>

//         </>
//     )
// }

export default Footer