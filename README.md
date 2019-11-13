# Good Cat Bad Cat      &      Good Dog Bad Dog

<p align="center">
   <img src="./20191113-100729-480x986.gif">
</p>

## Contributors

[Robert Peschke](https://github.com/RSP531)

## Introduction

An Android/iOS Application to sift through Cat & Dog images with the option of adding an image to the favorites list.

- This React Native application was created in 2-days
- React Native was learned over the course of the project

## What does the app do? 

    * App shows a list of Cat images & gifs
    * User can select if Cat is Good or Bad
    * Good Cats will be added to Favorites List and shown in the Scroll View
    * Bad Cats will be removed and a new image/gif will be generated
    
## Tech stack

 <img src="./React_Native_logo.png" width="30%" height="30%"> <img src="./Expo.jpeg" width="40%" height="40%">

 * [TheCatAPI](https://thecatapi.com/)
 
 * [DogAPI](https://dog.ceo/dog-api/)

## Technical Challenges and research that you anticipated

    * Postman was used to test GET requests from the two API's
    * 2 days to create a "Minimum Viable Product (MVP) Application"
  
## Challenges that were unexpected

    * Managing state was difficult between tabs. In the future I would like to learn Redux to manage state between tabs
    * I could not npm install anything. This was unexpected. In the future I would like to understand why Expo could not handle this
       * MongoAtlas
       * No Gesture Handlers
  
## Video Demo

![](second.gif)
  
## How does the app work? (behind the scenes)

    * Images are generated from two separate API's
    * "Good" images are stored in an array and rendered in the ScrollView

## Future features to be implemented

    * Gesture handling Swipe Features 
