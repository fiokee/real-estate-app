'use client';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../page.module.css'
import { FaLocationDot } from 'react-icons/fa6';

const HomeListing = () => {
    const [listings, setListings] = useState([]);
    const [allListings, setAllListings] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedListings = localStorage.getItem('listings');
            const parsedListings = storedListings ? JSON.parse(storedListings) : [];
            setListings(parsedListings);
            setAllListings(parsedListings);
        }
    }, []);

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilter(value);
        if (value === 'all') {
            setListings(allListings);
        } else if (value === 'rent') {
            const rentListings = allListings.filter((listing) => listing.listingType === 'rent');
            setListings(rentListings);
        } else if (value === 'sale') {
            const saleListings = allListings.filter((listing) => listing.listingType === 'sale');
            setListings(saleListings);
        }
    };

    const handleSearch = (e) => {
        setSearchItem(e.target.value);
        const filteredListings = allListings.filter((listing) =>
            listing.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setListings(filteredListings);
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-3">
                            <p>Type:</p>
                            <label className="form-check-label me-3 p-1" style={{ fontSize: '1.2rem' }}>
                                <input
                                    type="radio"
                                    name="filter"
                                    value="all"
                                    checked={filter === 'all'}
                                    onChange={handleFilterChange}
                                    style={{ transform: 'scale(1.5)' }}
                                />{' '}
                                All
                            </label>
                            <label className="form-check-label me-3 p-1" style={{ fontSize: '1.2rem' }}>
                                <input
                                    type="radio"
                                    name="filter"
                                    value="rent"
                                    checked={filter === 'rent'}
                                    onChange={handleFilterChange}
                                    style={{ transform: 'scale(1.5)' }}
                                />{' '}
                                Rent
                            </label>
                            <label className="form-check-label p-1" style={{ fontSize: '1.2rem' }}>
                                <input
                                    type="radio"
                                    name="filter"
                                    value="sale"
                                    checked={filter === 'sale'}
                                    onChange={handleFilterChange}
                                    style={{ transform: 'scale(1.5)' }}
                                />{' '}
                                Sale
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="search" className="form-label">Search</label>
                            <input
                                type="text"
                                className="form-control"
                                id="search"
                                value={searchItem}
                                placeholder="search..."
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                    <div className="col-md-9">
                        {listings.length === 0 ? (
                            <p>No listings available.</p>
                        ) : (
                            <div className="row">
                                {listings.map((listing) => (
                                    <div key={listing.id} className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div className="card-overlay">
                                                <img
                                                    src={listing.imageData}
                                                    className="card-img-top"
                                                    alt={listing.title}
                                                    style={{ height: '200px' }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title">{listing.title}</h3>
                                                <p className="card-text">
                                                    <FaLocationDot className="text-success" />
                                                    {listing.location}
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="card-text">
                                                        {listing.listingType === 'sale' ? 'For Sale' : 'For Rent'}
                                                    </p>
                                                    {listing.listingType === 'sale' ? (
                                                        <p className="card-text">${listing.price}</p>
                                                    ) : (
                                                        <p className="card-text">${listing.rent}/month</p>
                                                    )}
                                                </div>
                                                <button className="btn btn-outline-success w-100">Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card:hover {
                    border-radius: 8px;
                    transition: box-shadow 0.3s;
                    width: 101%;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
};

export default HomeListing;
