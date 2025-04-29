import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cardsData from "./cards.json";
import styles from "./Cards.module.css";

const colorMap = {
  Tout: "all",
  Rouge: "Red",
  Vert: "Green",
  Bleu: "Blue",
  Violet: "Purple",
  Noir: "Black",
  Jaune: "Yellow",
  Multicouleur: "Multicolor",
};

const types = ["Tout", "Leader", "Personnage", "Lieu", "Événement"];
const sortOptions = ["Nom", "Rareté", "Puissance", "Coût"];

// Couleurs simples
const simpleColors = {
  Red: styles.redBackground,
  Green: styles.greenBackground,
  Blue: styles.blueBackground,
  Purple: styles.purpleBackground,
  Black: styles.blackBackground,
  Yellow: styles.yellowBackground,
};

// Combinaisons multicolores exhaustives
const multicolorBackgrounds = {
  "Red/Green": styles.redGreenBackground,
  "Red/Blue": styles.redBlueBackground,
  "Red/Purple": styles.redPurpleBackground,
  "Red/Black": styles.redBlackBackground,
  "Red/Yellow": styles.redYellowBackground,
  "Green/Blue": styles.greenBlueBackground,
  "Green/Purple": styles.greenPurpleBackground,
  "Green/Black": styles.greenBlackBackground,
  "Green/Yellow": styles.greenYellowBackground,
  "Blue/Purple": styles.bluePurpleBackground,
  "Blue/Black": styles.blueBlackBackground,
  "Blue/Yellow": styles.blueYellowBackground,
  "Purple/Black": styles.purpleBlackBackground,
  "Purple/Yellow": styles.purpleYellowBackground,
  "Black/Yellow": styles.blackYellowBackground,
};

function getCardBackground(color) {
  if (!color) return styles.defaultBackground;

  if (color.includes("/")) {
    return multicolorBackgrounds[color] || styles.multicolorBackground;
  }

  return simpleColors[color] || styles.defaultBackground;
}

export default function Cards() {
  const [allCards, setAllCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColor, setSelectedColor] = useState("Tout");
  const [selectedType, setSelectedType] = useState("Tout");
  const [selectedSort, setSelectedSort] = useState("Nom");
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 25;

  useEffect(() => {
    const uniqueCardsMap = new Map();
    cardsData.forEach((card) => {
      const key = `${card.name}_${card.type}`;
      if (!uniqueCardsMap.has(key)) {
        uniqueCardsMap.set(key, card);
      }
    });
    setAllCards(Array.from(uniqueCardsMap.values()));
  }, []);

  const filteredAndSortedCards = allCards
    .filter((card) => {
      const matchesColor =
        selectedColor === "Tout" ||
        (selectedColor === "Multicouleur"
          ? (card.color && card.color.includes("/"))
          : (card.color && card.color.toLowerCase().includes(colorMap[selectedColor]?.toLowerCase()))
        );

      const matchesType =
        selectedType === "Tout" ||
        (card.type && card.type.toLowerCase() === selectedType.toLowerCase());

      const matchesSearch =
        card.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesColor && matchesType && matchesSearch;
    })
    .sort((a, b) => {
      if (selectedSort === "Nom") {
        return a.name.localeCompare(b.name);
      } else if (selectedSort === "Puissance") {
        return (b.power || 0) - (a.power || 0);
      } else if (selectedSort === "Coût") {
        return (b.cost || 0) - (a.cost || 0);
      } else if (selectedSort === "Rareté") {
        const rarityOrder = { L: 5, SR: 4, R: 3, UC: 2, C: 1 };
        return (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0);
      }
      return 0;
    });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredAndSortedCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const resetFilters = () => {
    setSelectedColor("Tout");
    setSelectedType("Tout");
    setSelectedSort("Nom");
    setSearchTerm("");
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage > 2) {
        pageNumbers.push(1);
        if (currentPage > 3) {
          pageNumbers.push("...");
        }
      }

      if (currentPage > 1) {
        pageNumbers.push(currentPage - 1);
      }

      pageNumbers.push(currentPage);

      if (currentPage < totalPages) {
        pageNumbers.push(currentPage + 1);
      }

      if (currentPage < totalPages - 1) {
        if (currentPage < totalPages - 2) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return (
      <div className={styles.pagination}>
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          className={styles.pageButton}
        >
          {"<"}
        </button>
        {pageNumbers.map((num, index) =>
          num === "..." ? (
            <span key={index} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => paginate(num)}
              className={`${styles.pageButton} ${currentPage === num ? styles.pageButtonActive : ""
                }`}
            >
              {num}
            </button>
          )
        )}
        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          className={styles.pageButton}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Listes des cartes</h1>

      <div className={styles.filtersContainer}>
        {/* Search and Filters */}
        <input
          type="text"
          placeholder="recherche par nom"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className={styles.input}
        />

        <select
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            setCurrentPage(1);
          }}
          className={styles.select}
        >
          {Object.keys(colorMap).map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setCurrentPage(1);
          }}
          className={styles.select}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={selectedSort}
          onChange={(e) => {
            setSelectedSort(e.target.value);
            setCurrentPage(1);
          }}
          className={styles.select}
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              Trier par {option}
            </option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className={styles.resetButton}
        >
          Effacer
        </button>
      </div>

      <div className={styles.cardsGrid}>
        {currentCards.length > 0 ? (
          currentCards.map((card) => (
            <Link
              to={`/cards/${card.id}`}
              key={card.id}
              className={styles.cardItem}
            >
              <img
                src={card.images?.small || "https://via.placeholder.com/300x400"}
                alt={card.name}
                className={`${styles.cardImage} ${getCardBackground(card.color)}`}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.name}</h3>
                <p className={styles.cardInfo}>
                  {card.type} • {card.rarity}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className={styles.noCards}>
            Carte non trouver
          </div>
        )}
      </div>

      {renderPagination()}
    </div>
  );
}
