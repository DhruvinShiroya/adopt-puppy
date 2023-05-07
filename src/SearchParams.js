import { useState, useEffect, useContext } from "react";
import PetResult from "./PetResult";
//eslint-disable-next-line
import ThemeContext from "./ThemeContext"; 
import useBreedList from "./useBreedList";

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "elephant"];
  // const location =  "Barrie ,ON";
  // never use hooks in if-else or loops or you will have a problem with the hooks behaviour
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext)
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Theme
          <select  onClick={(e) =>{
          setTheme( e.target.value)
          }}
          onBlur={(e) => {
              setTheme(e.target.value)
            }}
          >
          <option  value="darkblue">Dark Blue</option>
          <option  value="lightgreen">Light green</option>
          <option  value="#fo6do6">Fog Dog</option>
          <option  value="chartreuse">Chartreuse</option>
          <option  value="peru">peru</option>
          </select>
        </label>
        <button style={{background: theme}}>Submit</button>
      </form>
    <div> <PetResult pets={pets} /> </div>
    </div>

  );
};

export default SearchParams;
