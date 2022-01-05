import React, { Component } from 'react'
import {Link} from 'gatsby';
import logo from '../../images/logo.png';


export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm bg-theme text-white'>
              <Link to ="/" className='navbar-brand ml-5'>
                <img src={logo} alt="logo not found" width="40px" />               
                </Link>  
                <Button 
                className="navbar-toggler"
                type="button"
                >
                    <span className='text-white'>menu</span>
                </Button>
            </nav>
        )
    }
}
