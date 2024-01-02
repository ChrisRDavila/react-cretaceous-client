import React, { useState, useEffect } from "react";

function GetDino () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dinosList, setDinosList] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:5001/api/animals/`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
          setDinosList(jsonifiedResponse)
          setIsLoaded(true)
        })
      .catch((error) => {
        setError(error)
        setIsLoaded(true)
      });
    }, [])

  // const sortedDinosList = dinosList.sort((a, b) => a.name - b.name);

  console.log(dinosList)

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Dinos available</h1>
        <ul>
          {Object.values(dinosList).map((dinosaur) =>
          <li key={dinosaur.animalId}>
            <h3>Name: {dinosaur.name}</h3>
            <p>Species: {dinosaur.species}</p>
            <p>Age: {dinosaur.age}</p>
          </li>
          )}
        </ul>
      </React.Fragment>
    )
  }
}

export default GetDino;

// [
//   {
//       "animalId": 2,
//       "name": "Rexie",
//       "species": "Dinosaur",
//       "age": 10
//   },
//   {
//       "animalId": 3,
//       "name": "Matilda",
//       "species": "Dinosaur",
//       "age": 2
//   },
//   {
//       "animalId": 4,
//       "name": "Pip",
//       "species": "Shark",
//       "age": 4
//   },
//   {
//       "animalId": 5,
//       "name": "Bartholomew",
//       "species": "Dinosaur",
//       "age": 22
//   },
//   {
//       "animalId": 6,
//       "name": "Elizabeth",
//       "species": "Tyrannosaurus Rex",
//       "age": 8
//   },
//   {
//       "animalId": 7,
//       "name": "jeffrey",
//       "species": "Queztlcoatlus",
//       "age": 25
//   },
//   {
//       "animalId": 8,
//       "name": "lane",
//       "species": "Frogasaurus",
//       "age": 23
//   },
//   {
//       "animalId": 9,
//       "name": "ross",
//       "species": "Frogasaurus",
//       "age": 102
//   },
//   {
//       "animalId": 10,
//       "name": "nessy",
//       "species": "alasmasaur",
//       "age": 83
//   },
//   {
//       "animalId": 11,
//       "name": "thunderbird",
//       "species": "pteradactyl",
//       "age": 56
//   }
// ]