const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

fs.readFile("data.csv", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
  
    console.log(data);
  
  });

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "About",
      message: "Share brief about you."
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}

function generateHTML(answers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link href="style.css" rel="stylesheet" type="text/css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hello! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h2>Brief About Me</h2>
      <p class="brief">${answers.About}</p>
      <h3><span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  }
  
  promptUser()
    .then(function(answers) {
      const html = generateHTML(answers);
  
      return writeFileAsync("index.html", html);
    })
    .then(function() {
      console.log("Successfully wrote to index.html");
    })
    .catch(function(err) {
      console.log(err);
    });

    fs.readFile("data.csv", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

});

// About me :I am currently a freelance Graphic Desginer and looking to expand my knowlegde to the next level. Striving for excellence is the main key to being successful in the business industry. Working with a driven mindset, and learning new techniques is what I hunger for. Love working with groups and tackling different projects. The main goal is making sure that the client is happy with the masterpiece that is shown to them. If you do not push yourself each day, then you will never learn more than what you know. It's not bad to try new things, it helps make you even better than before.
// LinkedIn URL : https://www.linkedin.com/in/brianca-foster-52942624/