import {useState , useEffect} from "react"
import Pet from "./Pet"
const SearchParams = () =>{
  const ANIMALS = ["bird","cat","dog","elephant"]
  const BREED = []
  // const location =  "Barrie ,ON";
  // never use hooks in if-else or loops or you will have a problem with the hooks behaviour
  const [location, setLocation] = useState("")
  const [animal , setAnimal] = useState("")
  const [breed , setBreed] = useState("")
  const [pets, setPets] = useState([])

  useEffect(() => {
    requestPets();
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets(){
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )

    const json = await res.json()

    setPets(json.pets) 
  }

  return (<div className="search-params">
    <form>
      <label htmlFor="location">
        Location
        <input id="location" value={location} placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label htmlFor="animal" >
        Animal
        <select 
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          onBlur={(e) =>{
            setAnimal(e.target.value);
          }}>
          <option/>
          { ANIMALS.map( (animal) => {
            return <option key={animal} value={animal}>
              {animal}
            </option>
          } )}
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
          onBlur={(e) =>{
            setBreed(e.target.value);
          }}>
          <option/>
          { BREED.map( (breed) => {
            return <option key={breed} value={breed}>
              {breed}
            </option>
          } )}
        </select>
      </label>
      <button>Submit</button>
    </form>
    <div>
{
  pets.map((pet) => (
    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
  ))
      }
    </div>
    </div>
    
  )
}

export default SearchParams;
