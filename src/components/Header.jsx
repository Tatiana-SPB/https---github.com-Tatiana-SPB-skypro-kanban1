import React, { useState } from "react";
import { PopUser } from "./popups/PopUser";
import {
  Scontainer,
  SHeader,
  SHeader__block,
  Sheader__logo,
  Sheader__nav,
  Sheader__user,
} from "./Header.styled";

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
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
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
