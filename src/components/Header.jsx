import React, { useState } from "react";
import { PopUser } from "./popups/PopUser";

export function Header() {
  const [isPopUser, setPopUser] = useState(false);

  const clickPopUser = () => {
    setPopUser((prevIsPopUser) => {
      return !prevIsPopUser;
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="#" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="#" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a
              href="#user-set-target"
              onClick={clickPopUser}
              className="header__user _hover02"
              aria-haspopup="true"
              aria-expanded={isPopUser ? "true" : "false"}
            >
              Ivan Ivanov
            </a>

            <PopUser isPopUser={isPopUser} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
