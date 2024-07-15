import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        ຜົນຄົ້ນຫາຂໍ້ມູນສໍາລັບ: <b>ນະຄອນຫຼວງວຽງຈັນ</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">ສະຖານທີ່ຕັ້ງ</label>
          <input type="text" id="city" name="city" placeholder="ທີ່ຕັ້ງເມືອງ" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">ປະເພດ:</label>
          <select name="type" id="type">
            <option value="">ທັງໝົດ</option>
            <option value="buy">ຂຶ້ນບັນຊີ</option>
            <option value="rent">ອະນຸຍາດສິດໃຊ້</option>
            <option value="rent">ຫັນສິດໃຊ້</option>
            <option value="rent">ເຊົ່າແລະສໍາປະທານ</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">ຊັບສິນທີ່ຕິດພັນ</label>
          <select name="property" id="property">
            <option value="">ທັງໝົດ</option>
            <option value="apartment">ເຮືອນ</option>
            <option value="house">ອາຄານ</option>
            <option value="condo">ສາງສິນຄ້າ</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">ລາຄາຕໍ່າສຸດ</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="ທັງໝົດ"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">ລາຄາສູງສຸດ</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="ທັງໝົດ" />
        </div>
        <div className="item">
          <label htmlFor="bedroom">ອື່ນໆ</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="ທັງໝົດ" />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
