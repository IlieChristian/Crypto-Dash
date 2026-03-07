const SortSelector = ({ value, sortChange }) => {
  return (
    <div className="controls">
      <label htmlFor="sort">SortBy: </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => {
          sortChange(e.target.value);
        }}
      >
        <option value="market_cap_desc">Market Cap (High to Low)</option>
        <option value="market_cap_asc">Market Cap (Low to high)</option>
        <option value="price_desc">Price (High to Low)</option>
        <option value="price_asc">Price (Low to high)</option>
        <option value="change_desc">24h Change (High to Low)</option>
        <option value="change_asc">24h Change (Low to High)</option>
      </select>
    </div>
  );
};

export default SortSelector;
