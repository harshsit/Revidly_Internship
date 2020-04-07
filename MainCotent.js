import React from "react";

export default function MainCotent() {
  return (
    <div class="search">
      <input
        type="text"
        class="searchTerm"
        placeholder="What are you looking for?"
      />
      <button type="submit" class="searchButton">
        <i class="fas fa-search" />
      </button>
    </div>
  );
}
