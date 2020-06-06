# next-level-week
Next Level Week by Rocketseat

# Status
In development

## Description
This system was develop with [Rocketseat](https://rocketseat.com.br/) in the <b>Next Level Week</b> event.

## Requirements
To run this application you have to install (if you don't have already installed) the follow programs:
* In your computer:
   * [Node js and npm](https://nodejs.org/en/download/)
   * [Expo cli](https://expo.io/tools#cli)
* In your smartphone:
   * App called expo
<br></br>
## Start application
To start the application, you need follow the steps below:  
* Web Application:  
   * Go to backend folder and run the commands:
      * <b>```npm run knex:migrate```</b>
      * <b>```npm run knex:seed```</b>
      * <b>```npm run dev```</b>
   - Go to frontend folder and run the command <b>```npm start```</b>
   - Go to your brownser and type <b>```localhost:3000```</b>
   - Now you can use the web application.
<br></br>
* Mobile App:
   - Go to mobile folder and run the command <b>```expo start```</b> on terminal and your brownser will open a page with a qrcode.
   - Above the qrcode you will see a ip like that: <b>'exp://192.168.0.41:19000'</b>, copy only the ip: <b>192.168.0.41</b>.
   - Go to backend\src\routes\controllers\ItemsController.ts file and past the Ip that you copied and save the file.
   - Open the camera on your smartphone and scan the qrcode on the browser in yout pc.
   - Wait and your app be ready and then you can use it.
   

