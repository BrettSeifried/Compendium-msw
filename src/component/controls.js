import React from 'react';

export default function Controls({ query, setQuery }) {
  return (
    <form>
      <input
        value={query}
        type="text"
        id="header-search"
        placeholder="search shows"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
