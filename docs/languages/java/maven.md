# Maven

1. What is Maven?

   Maven is a build automation tool used primarily for Java projects.

2. What is Maven's Objectives?

   Maven's primary goal is to allow a developer to comprehend the complete state of a development effort in the shortest period of time. In order to attain this goal, Maven deals with several areas of concern:

   - Making the build process easy
   - Providing a uniform build system
   - Providing quality project information
   - Encouraging better development practices

3. Maven Lifecycle phases

   Although hardly a comprehensive list, these are the most common default lifecycle phases executed.

   - **validate:** validate the project is correct and all necessary information is available
   - **compile:** compile the source code of the project
   - **test:** test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed
   - **package:** take the compiled code and package it in its distributable format, such as a JAR.
   - **integration-test:** process and deploy the package if necessary into an environment where integration tests can be run
   - **verify:** run any checks to verify the package is valid and meets quality criteria
   - **install:** install the package into the local repository, for use as a dependency in other projects locally
   - **deploy:** done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects.

   There are two other Maven lifecycles of note beyond the default list above. They are

   - **clean:** cleans up artifacts created by prior builds

   - **site:** generates site documentation for this project
