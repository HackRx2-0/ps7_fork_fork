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
   - ![image](https://user-images.githubusercontent.com/50591491/126855957-5536b90b-7e70-46b5-97ea-d00d730e8213.png)

   - Upload button to enter the app
   - ![image](https://user-images.githubusercontent.com/50591491/126855952-b31a05eb-020c-4a6b-a1ed-973ba2780f35.png)

2. Home page

   - Drag and drop your files
   - ![image](https://user-images.githubusercontent.com/50591491/126855927-bf8aaf1b-75e2-4d0f-ae76-2bc61adc3c25.png)

   - The computer vision algorithm is implemented and a request to Flask API is sent.
   - ![image](https://user-images.githubusercontent.com/50591491/126855931-b3bc5771-8d5c-4a27-9cbf-2090572536ba.png)

   - Perform border correction and Skew and Tilt using Hough Transform
   - ![demo](https://user-images.githubusercontent.com/59837325/126857051-439c5fb3-b0ce-4df1-ab0b-5c0635973555.png)

3. Editor Page

   - The enhanced image can be seen on the editor page
   - ![image](https://user-images.githubusercontent.com/50591491/126855676-297b3a97-89cb-463e-9ba0-9a48b0da84d1.png)

   - Slider based color and contrast correction
   - ![image](https://user-images.githubusercontent.com/50591491/126855791-1c89beb3-efc9-4fb4-8e68-6509ffcae4b7.png)

   - Cropping and 360\* Rotation
   - ![image](https://user-images.githubusercontent.com/50591491/126855723-82152cd5-9bc4-4163-9fa1-e9ca0a7b1b15.png)

   - Brightness modulation
   - ![image](https://user-images.githubusercontent.com/50591491/126855691-49aeefea-34bc-4f90-b9ef-c989ed67bda3.png)

   - Undo Options & Text editor
   - ![image](https://user-images.githubusercontent.com/50591491/126855811-6ad80495-6af4-493d-85fc-418402ca27b5.png)

4. Select Multiple Files

   - Choose multiple files and automate the the process of file enhancement, manipulate each image individually
   - ![image](https://user-images.githubusercontent.com/50591491/126855487-a7cba542-5f50-441e-b72a-68c0fedcf8c5.png)

5. Create a PDF of resultant images

   - Create a PDF from multiple images and push it to AWS S3
   - ![image](https://user-images.githubusercontent.com/50591491/126856455-abfe807f-d39f-4e7d-92d4-ca8d9cb0a150.png)


### Tools and Languages:

<p align="left"> <a href="https://aws.amazon.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://materializecss.com/" target="_blank"> <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" width="40" height="40"/> </a> <a href="https://opencv.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://scikit-learn.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40"/> </a> <a href="https://www.tensorflow.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a> </p>

## Instructions

1. `git clone https://github.com/HackRx2-0/ps7_fork_fork.git`
2. `cd ./ps7_fork_fork`
3. Install node dependencies
   - `npm install`
4. Go to Collaboratory & Run the Collab File
5. Replace the Axios Base API with the ngrok URL from API in Colla
6. `npm start`
7. Go to `http://localhost:3000` in your browser running the app

## Useful Links

- [Flask API running Models in Collab](https://colab.research.google.com/drive/1dfm4i-KyhSQdnnar7ZdWRWAUG9TuRY8B?usp=sharing)

## Need help?

Contact us:

- [Apurva Sharma](https://www.linkedin.com/in/apurva866/)
- [Dev Sharma](https://www.linkedin.com/in/cryptus-neoxys/)
- [Sanchit Vijay](https://www.linkedin.com/in/sanchit-vijay-774432178)
- [Shashwat Gupta](https://www.linkedin.com/in/shashtag/)

---

```javascript
if (youEnjoyed) {
  starThisRepository();
}
```

---
