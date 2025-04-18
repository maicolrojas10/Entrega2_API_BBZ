import React from 'react'
import './Header.css';
import androidIcon from '../../Img/android-icon-192x192.webp';

const Header = () => {
    return (
        <header>
            <div className='header_img'>
                <img className="img_header" src={androidIcon} alt="icono android" />

            </div>

            <div className='header_buttons'>
                <button>
                    Docs
                </button>
                <button>
                    About
                </button>
                <button className='support'>
                    SUPPORT US
                </button>

            </div>


        </header>



    )
}

export default Header