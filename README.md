# favathlete
# About : It is an assignment of coding a web server and automating its deployment into a kubernetes cluster


# How to build :

Step 1 : Clone the repository using "https://github.com/Abhi-lash19/favathlete"

Step 2 : cd express

Step 3 : Run the build-and-deploy.sh

Step 4 : Run the Docker image with the command "docker run abhilash1901/nodejs-starter"

Step 5 : Or,do npm install and npm test.

Step 6 : Access the Server at "http://192.168.49.2/athlete"

# Files used in the assignment :

1.index.js - Source code of the index.js server

2.test.js - A Software test for the index.js server using mocha framework

3.Dockerfile - It is a file for creating docker image of index.js server

4.deployment.yaml - Kubernetes Manifest file including the deployment for the index.js server created.

5.ingress-yaml - Kubernetes Manifest file including ingress for the index.js server created.

6.service-yaml - Kubernetes Manifest file including service  for the index.js server created.

7.package.json, package-lock.json - Files that hold the information on the dependencies or packages installed for the project.

8.build-and-deploy.sh - A script file which takes care of building, packaging and deploying the application on minikube cluster.

9.test.js - Source code for testing the index.js server is giving correct response or not.

# Issues encountered :

1.Encountered incompatibility issues while running the software test using mocha framework - resolved it by setting "test": "mocha --experimental-modules test.js" in package.json file.

2.Faced configuration issues while setting up minikube cluster, resolved them by setting the environmental variable KUBECONFIG=$HOME/.kube/my_minikube_config

3.Faced the "ImagePullBackOff" error while trying to work with local Docker image - resolved it by loading my image on dockerhub and accessing image from that repository.

4.Faced issue in routing the request to Kubernetes Service - resolved it by enabling ingress addon using "minikube addons enable ingress"

5.Facing issue of 502 Bad Gateway , i tried but not able to resolve it .
