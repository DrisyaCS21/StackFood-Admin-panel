

import { useState } from "react";
import FoodItem from "./FoodItem";
import "./FoodSection.css";

const FoodSection = ({ addToCart, selectedCategory, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All categories", "Breakfast", "Lunch", "Dinner", "Snacks", "Beverages", "Desserts"]

  const foodItems = [
    {
      id: 1,
      name: "Medu Vada",
      price: 95.0,
      category: "Breakfast",
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      id: 2,
      name: "Grilled Lemon Chicken",
      price: 320.0,
      category: "Lunch",
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
    },
    {
      id: 3,
      name: "Cheese Pizza",
      price: 232.5,
      category: "Dinner",
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
    },
    {
      id: 4,
      name: "Masala Dosa",
      price: 120.0,
      category: "Breakfast",
      image: "https://th.bing.com/th/id/OIP.qDq9rcRr-tGQQ63r-w3L2QHaE5?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 5,
      name: "Paneer Tikka",
      price: 180.0,
      category: "Snacks",
      image: "https://th.bing.com/th/id/OIP.X_VKVv9crDGW8QuD3TUgoAHaLH?w=123&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 6,
      name: "Mango Lassi",
      price: 75.0,
      category: "Beverages",
      image: "https://th.bing.com/th/id/OIP.Nqmg6rTnryZXcVyI0lJsEAHaMC?w=196&h=318&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    
  ]

  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = selectedCategory === "All categories" || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="food-section">
        <div className="FoodTitle"><h2>Food Section</h2></div>
      
      <div className="food-controls">
        <div className="dropdown-container">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-dropdown"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="dropdown-arrow">▼</div>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Ex : Search Food Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="food-items-container">
        {filteredItems.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
};

export default FoodSection;
