import { useState } from "react";
import { pets } from "../../Data/pets";
import PertCards from "../PetCards/PertCards";
import Search from "../Search/Search";
import useFilter from "../../Hooks/useFilter";

function PetList() {
  const [Pets, setPets] = useState(pets);
  //Costume Hook
  const {filter,applyFilter,updateFilter} = useFilter()

  //Filter Simple
  // const filterRace = (race)=>{

  //   const filtredList = Pets.filter((p)=> p.race.toLowerCase().includes(race.toLowerCase()))
  //   setFiltredList(filtredList)
  // }

  return (
    <>
       <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Search for Race"
          name="race"
          onChange={event => updateFilter({race:event.target.value})}
        />
          <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Search for Type"
          name="type"
          onChange={event => updateFilter({type:event.target.value})}
        />
    {/* <Search/> */}
      <div class="grid grid-cols-4 gap-4">
        {applyFilter(Pets).map((animaux) => (
          <PertCards
            name={animaux.name}
            type={animaux.type}
            race={animaux.race}
            photo={animaux.photo}
          />
        ))}
      </div>
    </>
  );
}

export default PetList;
