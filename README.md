# About-Me-Website
Final project for CS463 at Portland State University. 
# Website link hosted through github
https://nelsonnguyen9878.github.io/About-Me-Website/index.html


# How to run
- view through github with the link above
- use Live Server extension through VSCode
- Open the HTML file locally on your computer



# index.html 
# Navbar section
This includes code from CS463 exercises. Only thing changed is the color, added in a border-bottom on pages that they're on. Added in a line transition when hovering over one of the navbar links.
Added a logo that brings back to home page with a border to make it look like a logo. 


# About content 

<div class="about-container">
<div class="about-image">
<div class="background-circle">
<div class="profile-circle">
This page features a grid of 1fr 1fr, splitting up the two containers. On the left is a background circle that is added to give the picture circle a creative look.


<div class="about-content"> 
On the right is a about me section where it features <h4>, <h1>, and <h5> to highlight my name and what the content is about. Below that is a paragraph that involves a summary of me. After that is a <button>Let's connect</button> that will bring the user to the contact page when clicked upon. A github, linkedin, and mail icons that lead to their respective links. Only thing that is not finished is the mail icon as it is suppose to be a pop-up tab that will allow you to send an email. Which is why it redirects it to the contact.html page. 

<div class="card-container">
<div class="info-card">
<div class="card-top">
<div class="icon-circle">
<div class="card-text">
The card containers features a card that gives information on their respective card. The card is split up in a grid with the icon on the left side inside a circle. On the right is a card-top that features an <h3> with the title and <p>, a brief text about it.


# previouswork.html
<section class="title"> This handles h1 and a message about the previous work.
<section class="card-section"> Section for where all the cards are going to display.
<div class="project-card">  Individual cards for each project I've worked on previously.
<div class="project-image"> Image that goes on to one project card
<div class="project-content"> Contents include description of the project , tags, and links
<div class="project-tags"> tags that the project include e.g. JS, CSS, HTML, etc...
<div class="project-links"> links to the repo of the project.
There is only one previous work listed on here, but I have the layout to add more cards for future projects that I've previously worked on.



# projects.html
<section class="featured-projects"> Three projects from my repository of my own choice that I want featured on the page.
<div class="project-grid"> Area for where all the project cards display
<article class="project-card"> card to display project
<div class="project-content"> content that includes <h3> title of the card, <p> description of the project, <a> link to github repo with github icon.
<section class="github-section"> Section that displays the popular repo on my github page.
<div class="github-header"> Title of the github-section
<div class="repo-container"> container for each repo card
<script src="githubAPI.js"></script> API call to my github repository

# githubAPI.js
const username is set to my github username, can switch out username if needed for future.
fetches the API link/repos, for each repo it creates a card with an element div and adds class repo-card. Fills the card with <h3> name of the repo, <p> description or no description if it doesn't have any. stars to show how many people have starred my repo and the main language used in the repo. 


# contact.html
<div class="contact-container"> splits the two sectiosn in to a grid 1fr 1fr
<div class="contact-details"> title, texts, and contact item
<div class="contact-item"> icons and circle
<div class="contact-text"> header of each contact item, with the description
<div class="user-info"> hajs the 4 labels and and input for each section.


# Notes
- There is not a lot of meaningful commit messages on this repo because I have been committing it on a different repo here: https://github.com/nelsonnguyen9878/LAB-NOTEBOOK-REPO/tree/main/Final
- Things that are not working is the form submission in the contact page. The message doesn't actually send anywhere because I haven't had the chance to setup a js file for that. That is something I would add in the future. Mail button on index page doesn't have a pop-up that allows to send an email. 






links to inspiration / outside source:
https://nicepage.com/st/544730/about-me-design-website-template
https://www.wix.com/blog/beautiful-contact-pages

image used in repository:
https://pngtree.com/freepng/yellow-notebook-cartoon-office_4690013.html

Website includes code inspired from previous exercises in the class, website from outside source such as W3school and chatgpt to help me understand parts of the code. AI usage was to help debug errors that I was stuck on for a while.
