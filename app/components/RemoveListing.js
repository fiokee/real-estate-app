// components/RemoveListing.js
'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const RemoveListing = () => {
    const [listings, setListings] = useState([]);

    // Load listings from local storage when component mounts
    useEffect(() => {
        const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
        setListings(storedListings);
    }, []);

    const handleDelete = (index) => {
        const newList = listings.filter((_, i) => i !== index);
        localStorage.setItem('listings', JSON.stringify(newList));
        setListings(newList);
    };

    return (
        <>
        <Navbar/>
        <div className="container" style={{ width: "70%" }}>
            <h3 className="mt-5">Current Listings</h3>
            {listings.length === 0 ? (
                <p>No listings available.</p>
            ) : (
                <ul className="list-group">
                    {listings.map((listing, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5>{listing.title}</h5>
                                <p>{listing.description}</p>
                                <p><strong>Location:</strong> {listing.location}</p>
                                <p><strong>Type:</strong> {listing.listingType === 'sale' ? `For Sale - ${listing.price}` : `For Rent - ${listing.rent}`}</p>
                                {listing.imageData && (
                                    <img src={listing.imageData} alt="Listing" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
                                )}
                            </div>
                            <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
};

export default RemoveListing;
