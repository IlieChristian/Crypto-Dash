const FilterInput = ({ value, filterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter coins by name or symbol"
        onChange={(e) => filterChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default FilterInput;
