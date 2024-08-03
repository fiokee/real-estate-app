// components/AddListing.js
'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const AddListing = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rent, setRent] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [imageData, setImageData] = useState('');
    const [listingType, setListingType] = useState('sale'); // Default to sale

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, price, rent, location, image, imageData, listingType });

        // Save the form data and image data to local storage
        const listingData = { title, description, price, rent, location, image, imageData, listingType };
        const listings = JSON.parse(localStorage.getItem('listings')) || [];
        listings.push(listingData);
        localStorage.setItem('listings', JSON.stringify(listings));

        

        // Reset form fields after submission
        setTitle('');
        setDescription('');
        setPrice('');
        setRent('');
        setLocation('');
        setImage('');
        setImageData('');
        setListingType('sale');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageData(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
            setImage(file.name);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container" style={{ width: "70%" }}>
                <h2 className="mt-3 mb-4">Add New Listing</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="listingType" className="form-label">Listing Type</label>
                        <select className="form-control" id="listingType" value={listingType} onChange={(e) => setListingType(e.target.value)} required>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                        </select>
                    </div>
                    {listingType === 'sale' && (
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                    )}
                    {listingType === 'rent' && (
                        <div className="mb-3">
                            <label htmlFor="rent" className="form-label">Rent per Month</label>
                            <input type="text" className="form-control" id="rent" value={rent} onChange={(e) => setRent(e.target.value)} required />
                        </div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="file" className="form-control" id="image" accept="image/*" onChange={handleImageChange} required />
                    </div>
                    {imageData && (
                        <img src={imageData} alt="Selected" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
                    )}
                    <button type="submit" className="btn btn-primary">Add Listing</button>
                </form>
            </div>
        </>
    );
};

export default AddListing;
