import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {
  const [search, setSearch] = useState("");
  const [delay, setDelay] = useState(500);
    const debouncedSearch = useDebounce(search, 500);

    const results = [1, 2, 3];

return (
  <div>
    <h2>Debounce Search Demo</h2>
       {/* Debounce Delay */}
      <div className="debounce-delay">
        <label>Debounce Delay (ms): </label>

        <input
          type="number"
          value={delay}
          min="0"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </div>

    <input
        type="text"
        placeholder="Search something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
  {/* Current Input */}
      <p>
        <strong>Current Input:</strong> {search}
      </p>

      {/* Debounced Value */}
      <p>
        <strong>Debounced Value (after {delay}ms):</strong>{" "}
        {debouncedSearch}
      </p>

      {/* Simulated Search Results */}
      <h3>Simulated Search Results:</h3>

      {debouncedSearch ? (
        <ul>
          {results.map((item) => (
            <li key={item}>
              Result for "{debouncedSearch}": Item {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>Start typing to see search results.</p>
      )}
    </div>
);
}

export default DebounceSearchDemo;