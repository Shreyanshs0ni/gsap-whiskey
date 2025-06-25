"use client";
import React, { useRef, useState } from "react";
import { allCocktails } from "../../constants";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = allCocktails.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };
  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };
  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(+1);
  const prevCocktail = getCocktailAt(-1);
  return (
    <div id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Whiskey Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="CockTail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index == currentIndex;

          return (
            <button
              className={`${isActive ? "border-white text-white" : "border-white/50 text-white/50"}`}
              key={cocktail.id}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrow">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>
        <div className="recipe">
                  <div ref={contentRef} className="info">
                      <p>Re  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
