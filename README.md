
# Real Estate Listings App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple real estate listings application where users can add, view, and remove property listings. The listings can be filtered by type (sale or rent) and searched by title. The app leverages local storage to save the listings data.

## Features

- Add new listings with title, description, location, price, rent, and image.
- View all listings with filtering options (all, sale, rent).
- Search listings by title.
- Delete listings.

## Technologies Used

- Next.js
- Bootstrap
- React icon (for icons)
- Local Storage

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/fiokee/real-estate-app
    ```

2. Navigate to the project directory:

    ```bash
    cd real-estate-listings
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## Usage

1. **Add Listing**:
    - Navigate to `/add-listing`.
    - Fill in the details of the property and submit the form to add a new listing.

2. **View Listings**:
    - Navigate to the homepage `/` to view all listings.
    - Use the filter options (All, Rent, Sale) to filter the listings.
    - Use the search bar to find listings by title.

3. **Remove Listings**:
    - Navigate to `/remove-listing`.
    - Click the "Delete" button next to a listing to remove it.

## Components

- **Navbar**: The navigation bar component.
- **AddListing**: The component to add a new listing.
- **RemoveListing**: The component to remove listings.
- **HomeListing**: The component to display and filter/search listings.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

