# Seat Booking App (React/Redux)
The main goal of this project is to practice with Redux library.
## About
In the first step, the application asks for the number of seats to be reserved and whether the seats should be next to each other. Then, based on the seats fetched from the api server, a graphical representation of the cinema hall is displayed.
At this stage, the application suggests places to the user. If the option that places should be next to each other has been selected, it will propose places that will not be separated from each other by empty space and another, already occupied place.
Additionally it is possible to edit and re-select places. The booking summary page is displayed, after approval of the reservation.
## How to deploy
* To get started clone [repository](https://github.com/pressR2/portfolio-react.git).
* Install all project dependencies with `npm install`.
* To get data API go to [link](https://bitbucket.org/xkom/zadanie_rekrutacyjne/src/master/).
* Start the development server with `npm start`.
### Requirements
* [Node.js](https://nodejs.org)
### Dependencies
* [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)