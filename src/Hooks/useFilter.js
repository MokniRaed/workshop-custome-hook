import React, { useState } from "react";

const useFilter = (initialState={race: "", location: "", type: ""}) => {
  const [filter, setFilter] = useState(initialState);

  const updateFilter = (newFilter) => {
    setFilter({ ...filter, ...newFilter });

  };

  const applyFilter = (pets) => {
    return pets.filter((pet) => {
      return (
        pet.race.toLowerCase().includes(filter.race.toLowerCase()) &&
        pet.type.toLowerCase().includes(filter.type.toLowerCase()) &&
        pet.location.toLowerCase().includes(filter.location.toLowerCase())
      );
    });
  };

  return {filter,updateFilter,applyFilter}
};

export default useFilter;
