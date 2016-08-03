# sampleshellapp
http://sampleshellapp.izyware.com/

A modern web application architecture leveraging IzyWare to deliver your application 'shell' and populate the content using JS. This means you can get pixels on the screen without the network, even if the content eventually comes from the network - a great performance win. In browsers without IzyWare, we gracefully degrade to server-side rendering.

## Hosted Setup Instructions

First, log in to your account and [set up a new project](https://izyware.com/):

* Open the **IDE** tool
* Add the modules from the github respository to the project `NOTE: If you are Pro customer, you can use direct github integration to Add the modules with a single click`
* Commit the changes you made in the IDE to the project 
* Launch the project

## Non-hosted setup instructions

* Clone the repository 
* Download the [built tool](https://izyware.com/) 
* Use the following command to generate the JS payload: `izy.createjspayload  sampleshellapp/viewer/top`
* Insert the JS payload into the header section of your HTML container 
