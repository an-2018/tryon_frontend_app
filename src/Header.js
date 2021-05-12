import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import {Link} from 'react-router-dom'
>>>>>>> 03e781636bd1f5e363931a435e2fcc03644b6fcc


function Header() {

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    // src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
                    src='https://storage.googleapis.com/tryon_storare/logo_tryon.png'
                    alt=''
                />
            </Link>
<<<<<<< HEAD

            <div className='header__center'>
                <input type='text' />
                <SearchIcon />
=======
            
            <div className='header__center'>
                <input type='text'/>
                <SearchIcon/>
>>>>>>> 03e781636bd1f5e363931a435e2fcc03644b6fcc
            </div>

            <div className='header__right'>
                <p>Become a host</p>
<<<<<<< HEAD
                <ExpandMoreIcon />
                <LanguageIcon />
                <AccountCircleIcon />
            </div>
=======
                <ExpandMoreIcon/>
                <LanguageIcon/>
                <AccountCircleIcon/>
            </div> 
>>>>>>> 03e781636bd1f5e363931a435e2fcc03644b6fcc
        </div>
    )
}

export default Header