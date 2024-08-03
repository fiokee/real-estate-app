import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Head from 'next/head';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
            <div className="container">
                <a className="navbar-brand text-primary" href="#">
                    Real-Estate
                </a>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse" // Use data-toggle for Bootstrap 4
                    data-target="#navbarNav" // Use data-target for Bootstrap 4
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href='/add-listing'>
                                Add New Listing
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href='/remove-listing'>
                                Remove Listing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;
