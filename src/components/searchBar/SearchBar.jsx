import { useState } from "react";
import "./searchBar.scss";

const types = ["ດິນລັດ", "ດິນຫັນສິດ", "ການເຊົ່າແລະສໍາປະທານ"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="ສະຖານທີ່ຕັ້ງ" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder=""
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder=""
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
