# Kaizen - Client Side

## Description

This is the client side of the Kaizen project. It is a web application designed to help users learn japanese by utilizing spaced repetition as a revision technique. It is built using React.

## Stake Holders

When we began the project we were given our key stakeholder and issue. 

* " Crammer Education has been increasingly busy since the pandemic. Lockdowns and changes in the way that we live our lives have led to an increased demand for remote learning that is effective, enjoyable, and accessible."

* "Crammer are keen to grow their customer base and would like you to design and build a product that they can add to their existing portfolio of apps that will support students across the country with their revision."

### How can we help?

Kaizen Flashcards helps address the problem of effective, enjoyable, and accessible remote learning for students by providing a convenient and user-friendly tool for students to use in their revision.

With the implementation of a spaced repetition system, the app can optimize the time and effort students put into learning by helping them prioritize and focus on the cards they struggle with the most. This can lead to more efficient and effective learning, allowing students to retain information better and progress faster in their studies. 

The clear and logical design of the app, as noted by the students in the stakeholder statements, also contributes to a positive learning experience for users.

Overall, Kaizen Flashcards can help Crammer Education meet their goal of growing their customer base and staying one step ahead of the competition by providing a valuable and innovative tool for remote learning.

### Stakeholder Priority List

#### Students:
* The primary stakeholders are the students who will be using the product to improve their learning and revision. 

* The app's success will be measured by how well it helps students to learn and revise more effectively, so their feedback and needs are crucial in the development process.

#### Crammer UK:
* As the company providing the app, Crammer UK will benefit from increased customer satisfaction and revenue growth.

* They have a vested interest in creating a high-quality product that meets the needs of their target audience and sets them apart from competitors.

#### Product Manager, Steph Ovett:
* As the product manager, Steph Ovett is responsible for overseeing the development of the app and ensuring that it meets the company's goals and objectives.

* She will work closely with the development team to ensure that the app is delivered on time, on budget, and to a high standard.

#### CEO, Steve Crammer:
* As the CEO of Crammer UK, Steve Crammer has the ultimate responsibility for the success of the company's products.

* He will be interested in how the app fits into the overall product portfolio, how it aligns with the company's strategic goals, and how it contributes to the bottom line.

### User Stories

Development was guided by looking at these requests and stakeholders needs. We would figure out tasks based on what we would want to implement to meet these needs.

* As a user, I want to be able to create an account so that I can save my progress and access my decks from any device.

* As a user, I want to be able to create a deck so I can revise set topics.

* As a user, I want to be able to view all my decks so I can easily access the ones I want to revise.

* As a user, I want to be able to add cards to a deck so I can revise specific information.

* As a user, I want to be able to edit cards so I can correct any mistakes.

* As a user, I want to be able to delete cards so I can remove any cards I no longer need.

* As a user, I want to be able to delete decks so I can remove any decks I no longer need.

* As a user, I want to be able to learn the cards in a deck so I can revise the information.

* As a user, I want to be able to view the statistics of a deck so I can see how well I am doing.

These were some of the initial things we wanted to implement based on how a user would interact with the decks and cards. In time specific features were added to meet the needs of the stakeholders.

## App Design and Development

### Wireframes

The Wireframes were created using Figma. They were created to give a general idea of the layout and design of the app, and to help us plan the structure of the app before we started coding. Our first initial wireframes can be seen [here](https://www.figma.com/file/Cq8LuWuiRfxg1FOFY7e2Ii/Kaizen?node-id=0%3A1&t=O6tT1C6FmRxmrgNL-1). In our initial discussions we decided that we would like to have a landing page, a login page, a page to view all the decks, a page to view all the cards in a deck, a page to learn the cards in a deck, a page to view the statistics of a deck, and a page to view the statistics of all the decks.

Most of these initial designs were very rigid and especially the All decks page was not as creative from a front end perspective. This is fine as wireframes are used as the initial planning stages and made it easier to work on the fundamentals before making them look nice in development.

## Features

### Landing Page

The landing page is the first page that users will see when they visit the site. It provides a brief overview of the app and its features, and includes a call to action to encourage users to sign up.

### Registration Page

The registration page allows users to create an account. It includes a form with fields for username, and password. We use our own authorization system to handle user registration and login. This allows us to use the username and user ID across different aspects of the site. Such as finding the users decks and cards.

### Decks Page

The decks page allows users to view all the decks they have created. It includes a button to add a new deck, and a button to delete a deck. The decks are displayed in a grid format, with the title of the deck displayed on top of the deck block. By clicking on the deck block, the user is taken to the cards page for that deck.

### Cards

The cards page allows users to view all the cards in a deck. It includes a button to add a new card, and a button to delete a card. The title of the deck is also listed at the top with a count of how many cards are in the deck. By clicking on Start Learning the user is taken to the learning page for that deck.

### Learning Page

The learning page is the core feature of the site and allows users to learn the cards in a deck. The user will be presented with a card and asked to enter the answer. If the typed answer is close enough to the actual card answer then the colour will change to green. If the typed answer is incorrect then the colour will change to orange. After both of these instances the answer will be revealed and a description of the answer.

### Statistics

### Theme Toggler

The site features a dark mode button that allows users to switch between light and dark mode. This is achieved using CSS variables and a toggle button that changes the value of the CSS variables. The dark mode button is located in the top right corner of the site.

### Future Features

One of the early discussed features was a Calender. This would allow users to schedule when they would like to learn their cards. This would be a great feature to add in the future as it would allow users to plan their revision and make sure they are learning the cards at the right time. As well as see when they should expect to be tested on the cards.

Another feature was the idea of a user profile page where users could see their statistics and progress. This would be a great feature to add in the future as it would allow users to see how they are doing and how they can improve. As well as see how they are doing compared to other users. In the end, the statistics page was added instead of a user profile page.

## Bugs and Conflicts

## Local Installation

To install the client end of the application locally, follow these steps:

1. Clone the repository from GitHub using the following command:

`git clone (REPO LINK)`

2. Navigate to the project directory using CD in the terminal.

3. Install the required dependencies using the following command:

`npm install`

4. Start the application using the following command:

`npm start`

5. The application should now be running on localhost:5173

## Credits




