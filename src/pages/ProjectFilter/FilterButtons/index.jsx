import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import './index.css';

export const FilterButtons = ({ categories, setSelectedCategory }) => {
  const [selectedCategory, setLocalSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setLocalSelectedCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="filterbuttons">
      <SlideTabs
        categoriesList={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

const SlideTabs = ({ categoriesList, selectedCategory, onCategoryChange }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const initialTab = document.querySelector(".tab.active");
    if (initialTab) {
      const { offsetLeft, offsetWidth } = initialTab;
      setPosition({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }
  }, [selectedCategory]);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="tab-container"
    >
      {categoriesList.map((category, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          onClick={() => onCategoryChange(category)}
          isActive={selectedCategory === category}
        >
          {category}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick, isActive }) => {
  const ref = useRef(null);

  const updateCursorPosition = () => {
    if (ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={updateCursorPosition}
      onClick={() => {
        updateCursorPosition();
        onClick();
      }}
      className={`tab ${isActive ? "active" : ""}`}
    >
      {children}
    </li>
  );
};


const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="cursor"
    />
  );
};
