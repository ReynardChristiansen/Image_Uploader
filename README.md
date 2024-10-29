# Image Uploader



## Environment Variables (.env)

Before you can run the application, you need to create a `.env` file in the root of your project. This file should contain the following variables:


    PORT=your_port_here
    API_KEY=your_api_key_here
    URL_PATH=your_path_here

## Getting Started
    1. git clone https://github.com/ReynardChristiansen/Image_Uploader.git
    2. npm install
    3. npm run dev

## Functionality

You can upload images using the following API endpoint:

    Upload Image (POST) : https://imagify-eight.vercel.app/api/upload

## Request Body

Make sure to use form-data for the request body and include the following key:

    source: [value]



