import React, { useState } from "react";
import { PopUser } from "../popups/PopUser.jsx";
import {
  Scontainer,
  SHeader,
  Sheader__a_main_new,
  SHeader__block,
  Sheader__logo,
  Sheader__nav,
  Sheader__user,
} from "./Header.styled.js";
import { Link } from "react-router-dom";

export function Header() {
  const [isPopUser, setPopUser] = useState(false);

  const clickPopUser = () => {
    setPopUser((prevIsPopUser) => {
      return !prevIsPopUser;
    });
  };

  return (
    <SHeader>
      <Scontainer>
        <SHeader__block>
          <Sheader__logo>
            <a href="#" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </Sheader__logo>
          <Sheader__logo>
            <a href="#" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </Sheader__logo>
          <Sheader__nav>
            <Sheader__a_main_new to="/add" id="btnMainNew">
              Создать новую задачу
            </Sheader__a_main_new>
            <Sheader__user
              type="button"
              onClick={clickPopUser}
              aria-haspopup="true"
              aria-expanded={isPopUser ? "true" : "false"}
            >
              Ivan Ivanov
            </Sheader__user>

            <PopUser isPopUser={isPopUser} />
          </Sheader__nav>
        </SHeader__block>
      </Scontainer>
    </SHeader>
  );
}

export default Header;
