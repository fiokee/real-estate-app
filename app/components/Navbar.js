'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Head from 'next/head';

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    integrity="sha512-dQ9p5OPOlO1X2ZVtX6j+1I5+0Iz5T+hGnsCB2FjpjF2Jb/12Z+FS4axq5tTfVz2N/cG7a5Y5pFw5M5q89FLVSQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
                <div className="container">
                    <a className="navbar-brand text-primary" href="#">
                        Real-Estate
                    </a>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={!isCollapsed}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" legacyBehavior>
                                    <a className="nav-link font-weight-bold text-success">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/add-listing' legacyBehavior>
                                    <a className="nav-link font-weight-bold text-success">Add New Listing</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/remove-listing' legacyBehavior>
                                    <a className="nav-link font-weight-bold text-warning">Remove Listing</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
