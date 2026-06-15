import React, { useContext, useState } from "react";
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
import { useAuth, ThemeContext } from "../../context/contextAPI.js";

export function Header() {
  const [isPopUser, setPopUser] = useState(false);
  const { user } = useAuth();
  const { theme } = useContext(ThemeContext);

  const clickPopUser = () => {
    setPopUser((prevIsPopUser) => {
      return !prevIsPopUser;
    });
  };

  return (
    <SHeader
      style={{ backgroundColor: theme === "light" ? "#20202C" : "#FFFFFF" }}
    >
      <Scontainer>
        <SHeader__block>
          <Sheader__logo>
            <a href="#" target="_self">
              <img
                src={
                  theme === "light"
                    ? "/images/logo_dark.png"
                    : "/images/logo.png"
                }
                alt="logo"
              />
            </a>
          </Sheader__logo>
          <Sheader__nav>
            <Sheader__a_main_new to="/add" id="btnMainNew">
              Создать новую задачу
            </Sheader__a_main_new>
            <Sheader__user
              style={{ color: theme === "light" ? "#FFFFFF" : "#565eef" }}
              type="button"
              onClick={clickPopUser}
              aria-haspopup="true"
              aria-expanded={isPopUser ? "true" : "false"}
            >
              {user ? user.login : "Гость"}{" "}
            </Sheader__user>

            <PopUser isPopUser={isPopUser} />
          </Sheader__nav>
        </SHeader__block>
      </Scontainer>
    </SHeader>
  );
}

export default Header;
