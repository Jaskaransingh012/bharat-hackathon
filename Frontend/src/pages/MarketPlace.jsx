import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import AnimalCard from "../Components/AnimalCard";
import { Link } from "react-router-dom";
import "../Css/FilterAndSort.css";

function MarketPlace() {
  const [filters, setFilters] = useState({
    dogs: false,
    cats: false,
    birds: false,
    fish: false,
  });
  const animals = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      category: "dogs",
      age: 2,
      gender: "Male",
      price: 1200,
      imageUrl:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80",
      seller: { location: "New York, USA" },
    },
    {
      id: 2,
      name: "Max",
      breed: "German Shepherd",
      category: "dogs",
      age: 3,
      gender: "Male",
      price: 1500,
      imageUrl:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80",
      seller: { location: "Los Angeles, USA" },
    },
    {
      id: 3,
      name: "Luna",
      breed: "Siamese",
      category: "cats",
      age: 1,
      gender: "Female",
      price: 800,
      imageUrl:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80",
      seller: { location: "Chicago, USA" },
    },
    {
      id: 4,
      name: "Polly",
      breed: "Parrot",
      category: "birds",
      age: 4,
      gender: "Female",
      price: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80",
      seller: { location: "Miami, USA" },
    },
  ];
  const [sortBy, setSortBy] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [displayedAnimals, setDisplayedAnimals] = useState(animals);

  // Updated animals array with categories
 
  const applyFilter = () => {
    console.log("logged");
    const filteredAndSortedAnimals = animals
    .filter((animal) => {
      const activeFilters = Object.keys(filters).filter((key) => filters[key]);
      if (activeFilters.length === 0) return true; // Show all if no filters are selected
      return activeFilters.includes(animal.category); // Filter by active categories
    });
    console.log(filteredAndSortedAnimals);
    setDisplayedAnimals(filteredAndSortedAnimals);
  }
  // Updated filter logic
  

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
    console.log("logged");
    const filteredAndSortedAnimals = animals
    .filter((animal) => {
      const activeFilters = Object.keys(filters).filter((key) => filters[key]);
      if (activeFilters.length === 0) return true; // Show all if no filters are selected
      return activeFilters.includes(animal.category); // Filter by active categories
    });
    console.log(filteredAndSortedAnimals);
    setDisplayedAnimals(filteredAndSortedAnimals);
  };

  const applySort = (sortValue, label) => {
    setSelectedSort(label);
    setSortBy(sortValue);
    setSortOpen(false);
  };

  const clearSort = () => {
    setSelectedSort("");
    setSortBy("");
  };

  return (
    <div className="g-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl mb-8">🐾 Animal Marketplace</h1>
        <h2 className="mb-4">Find your perfect companion.</h2>

        {/* Filter/Sort Controls */}
        <div className="filterSortWrapper mb-8">
          <button
            className="filterBtn"
            onClick={() => setFilterOpen(!isFilterOpen)}
          >
            <FontAwesomeIcon icon={faFilter} className="icon" /> Filter
          </button>

          <div className="sortDropdownContainer">
            <button
              className="sortBtn"
              onClick={() => setSortOpen(!isSortOpen)}
            >
              Sort By <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </button>
            {isSortOpen && (
              <div className="sortDropdown">
                <ul>
                  <li
                    onClick={() =>
                      applySort("priceLowToHigh", "Price: Low to High")
                    }
                  >
                    Price: Low to High
                  </li>
                  <li
                    onClick={() =>
                      applySort("priceHighToLow", "Price: High to Low")
                    }
                  >
                    Price: High to Low
                  </li>
                  <li onClick={() => applySort("nameAtoZ", "Name: A to Z")}>
                    Name: A to Z
                  </li>
                  <li onClick={() => applySort("nameZtoA", "Name: Z to A")}>
                    Name: Z to A
                  </li>
                </ul>
              </div>
            )}
          </div>

          {selectedSort && (
            <div className="sortTag">
              {selectedSort}
              <FontAwesomeIcon
                icon={faTimes}
                className="clearSort"
                onClick={clearSort}
              />
            </div>
          )}

          {isFilterOpen && (
            <div className="filterModal">
              <div className="modalContent">
                <h3>Select Filters</h3>
                <div className="filterOptions">
                  <label>
                    <input
                      type="checkbox"
                      name="dogs"
                      checked={filters.dogs}
                      onChange={handleFilterChange}
                    />{" "}
                    Dogs
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="cats"
                      checked={filters.cats}
                      onChange={handleFilterChange}
                    />{" "}
                    Cats
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="birds"
                      checked={filters.birds}
                      onChange={handleFilterChange}
                    />{" "}
                    Birds
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="fish"
                      checked={filters.fish}
                      onChange={handleFilterChange}
                    />{" "}
                    Fish
                  </label>
                </div>
                <button
                  className="applyBtn"
                  onClick={() => {
                    setFilterOpen(false);
                    applyFilter();

                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Animal Cards Grid */}
        <div className="mt-5 flex gap-5 flex-wrap">
          {displayedAnimals.map((animal) => (
            <Link to={`${animal.id}`} key={animal.id}>
              <AnimalCard
                breed={animal.breed}
                image={animal.imageUrl}
                price={animal.price}
                age={`${animal.age} years`}
                gender={animal.gender}
                location={animal.seller.location}
                timeAgo="Recently"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
