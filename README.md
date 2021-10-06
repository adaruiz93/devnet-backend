# DevNet Backend

# Description
This is the back end repo for the collaborative GA group project number 3.
DevNet provides a space for current students, alumni, and new developers to post interview questions they've encountered during their job search.
The purpose of this is to provide insight for those yet to start their job search, and provide live data for those already searching.
The goal is to build community, offer support and solutions that may not have been previously considered.

# Brief Example
When the backend server is running successfully at http://localhost:9000/devnet you will see the post data parsed as a json object
![json object example](/planning/json.png)

# List of Features / User Stories
### MVP (Bronze)
ASU I want to post new content containing information about interview questions such as the type of question asked (behavioral or technical) and details about the solution, if any.
ASU I want to edit, update, and delete existing posts.

### Silver
ASU I want to create a profile displaying my name, job title and experience, and a relevant list of skills.
ASU I want to post new content that is associated with my user profile, and only edit or delete posts that I have created.

### Gold
ASU I want to interact with other users, keep a list of "friends", and build a network.
Site functionality should include a space to post resumes and receive feedback, as well as discuss current freelance rates and strategies while logging completed jobs.

# List of Technologies Used
Mongoose API, Express, Node, JavaScript

# Installation Instructions / Getting Started
1. Fork and clone this repo.
2. Open the back end folder in your CLI and run
  nodemon server.js
3. If you received the confirmation message in your terminal, you're good to move on to starting the front end repo, found [here:](https://github.com/adaruiz93/devnet-frontend)  
![terminal success confirmation message](/planning/terminal-success.png)
4. Be sure to run the front end steps in a new terminal window with the back end server still running or you will receive an error.

#Contribution Guidelines
This section should offer guidance on where and how users can contribute to your code, identify bugs, and propose improvements
Good links to include are:
A link to the project's main repository
A link to the project's issue tracker
