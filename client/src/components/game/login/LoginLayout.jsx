import Login from "./Login";
import { useSelector } from "react-redux";

const LoginLayout = () => {
  const { loading } = useSelector((state) => state.authReducer);

  return (
    <div>
      {!loading ? (
        <div className="content">
          <header>
            <h2>WHO WANTS TO BE CRYPTOMILLIONARY</h2>
          </header>
          <div className="layout-login">
            <Login />
          </div>
        </div>
      ) : (
        <div> ...loading</div>
      )}
    </div>
  );
};

export default LoginLayout;
