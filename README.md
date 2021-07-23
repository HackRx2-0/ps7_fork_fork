# Team - ps7_fork(fork())
# DocuMate - Enhance the quality of your Document
## Submission for HackRX 🌟

A web application that lets the user upload or take a picture of 
their document, with functionality to amplify the quality of a document image. 
The app will have a modern design with essential features as described in the 
problem statement, apart from the mentioned features we are offering the liberty 
to choose between a plethora of filters and help them create a final document
with enhanced quality.

<p align="center">
<a href="https://github.com/HackRx2-0/ps7_fork_fork">
<img src="https://user-images.githubusercontent.com/59837325/126841069-eddb957a-357c-4708-a9ac-647e2fd8422b.png" alt="Unite-logo"/>
</a>
</p>

## Features and Interfaces

1. Landing Page and Upload button
   - Seamless landing page 
   - ![image](#)
 
   - Explains the functionality of the application
   - ![image](#)
   
   - Upload button to enter the app 
   - ![image](#)

2. Home page 
   - Drag and drop your files
   - ![image](#)
   
   - The computer vision algorithm is implemented and a request to Flask API is sent. 
   - ![image](#)

   - Perform border correction and Skew and Tilt using Hough Transform
   - ![image](https://user-images.githubusercontent.com/59837325/126842720-811f11ae-3d22-4677-b8a6-0b4ff57f49e4.jpeg)
   
3. Editor Page
   - The enhanced image can be seen on the editor page
   - ![image](#)

   - Slider based color and contrast correction
   - ![image](#)
   
   - Cropping and 360* Rotation
   - ![image](#)

   - Brightness modulation 
   - ![image](#)

   - Undo Options & Text editor
   - ![image](#)

4. Select Multiple Files
   - Choose multiple files and automate the the process of file enhancement, manipulate each image individually 
   - ![image](#)

5. Create a PDF of resultant images
   - Create a PDF from multiple images and push it to AWS S3 
   - ![image](#)


6. Preview of final Enhanced Document ✨
   - Each image is enhanced automatically and a PDF is created 
   - ![image](#)


### Tools and Languages: 
<p align="left"> <a href="https://aws.amazon.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://materializecss.com/" target="_blank"> <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" width="40" height="40"/> </a> <a href="https://opencv.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://scikit-learn.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40"/> </a> <a href="https://www.tensorflow.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a> </p>

## Instructions

1. `git clone https://github.com/Apurva-tech/unite.git` 
2. `cd ./unite`
3. Install node dependencies 
   - `npm install`
4. Replace firebase API keys with your configurations
5. Create a `.env` file 
   - Add relevant credentials
   - `cp .env.example .env` 
5. `npm run dev`
6. The app is now running at http://localhost:3030/landing 


## Useful Links

- [Flask API Code](#)
- [Ngrok Flask API(Recent)](#)

## Need help?

Contact us: 
- [Apurva Sharma](https://www.linkedin.com/in/apurva866/)
- [Dev Sharma](https://www.linkedin.com/in/cryptus-neoxys/)
- [Sanchit Vijay](https://www.linkedin.com/in/sanchit-vijay-774432178)
- [Shashwat Gupta](https://www.linkedin.com/in/shashtag/)


---------

```javascript

if (youEnjoyed) {
    starThisRepository();
}
```

-----------
