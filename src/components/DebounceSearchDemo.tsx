import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {
  const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

return (
  <div>
    <h2>Debounce Search Demo</h2>

    <input
  type="text"
  placeholder="Search something..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<p>Current Search: {search}</p>
      <p>Debounced Search: {debouncedSearch}</p>
  </div>
);
}

export default DebounceSearchDemo;