import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">State Lands Administrations</h1>
          <p>
          ລະບົບຄຸ້ມຄອງຂໍ້ມູນການຂຶ້ນບັນຊີທີ່ດິນຂອງລັດ, ການຂໍອະນຸຍາດສິດໃຊ້ທີ່ດິນຂອງລັດ ແລະ ການຫັນສິດໃຊ້ທີ່ດິນຂອງລັດມາເປັນສິດນໍາໃຊ້ຂາດຕົວບຸກຄົນ
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>ການຫັນສິດ</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>ການຂໍອະນຸຍາດສິດໃຊ້</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>ການຂຶ້ນບັນຊີທີ່ດິນລັດ</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
