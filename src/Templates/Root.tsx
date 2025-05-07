import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../Styles/App.scss";
import "../Components/Buttons/Button.scss";
import FlexContainer from "../Components/Assets/FlexContainer";
import Burger from "../Components/Header/Burger";
import MainLogo from "../Components/Header/MainLogo";
import Cart from "../Components/Cart/Cart";

const Root = () => {
  return (
    <>
      <header style={{paddingBlock:"2rem"}}>
        <div className="wrapper">
          <FlexContainer wrap="wrap" justify="space-evenly">
            <Burger />
            <MainLogo />
            <Cart cartItemCounter={0} />
          </FlexContainer>
        </div>
      </header>
      <Outlet />
      <footer>Footer</footer>

      <ToastContainer />
    </>
  );
};

export default Root;
