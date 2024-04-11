import React from "react";
import Eth from "../assets/eth.svg";
import Logo from "../assets/deer1.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { address, isConnected, conncet } = props;

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem"> Swap </div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem"> Tokens </div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={conncet}>
          {isConnected ? (address.slice(0,4) + "..." + address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
};

export default Header;
