import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>ຍິນດີຕ້ອນຮັບກັບມາ</h1>
          <input name="username" type="text" placeholder="ຊື່ຜູ້ນໍາໃຊ້" />
          <input name="password" type="password" placeholder="ລະຫັດຜ່ານ" />
          <button>ເຂົ້າສູ່ລະບົບ</button>
          {/* <Link to="/register">{"Don't"} you have an account?</Link> */}
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
