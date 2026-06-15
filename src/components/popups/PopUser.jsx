import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuth, ThemeContext } from "../../context/contextAPI.js";
import {
  Sheader__a_main_new,
  Sheader__pop_user_set,
  Sheader__pop_user_set_mail,
  Sheader__pop_user_set_name,
  Sheader__pop_user_set_theme,
} from "./PopUser.styled.js";

export function PopUser({ isPopUser }) {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useContext(ThemeContext);
  const onToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!isPopUser || !user) return null;

  return (
    <Sheader__pop_user_set
      style={{
        backgroundColor: theme === "light" ? "rgba(32, 34, 41, 1)" : "#fff",
        border:
          theme === "light"
            ? "rgba(78, 85, 102, 1)"
            : "rgba(148, 166, 190, 0.4)",
        boxShadow:
          theme === "light"
            ? "0px 10px 39px 0px rgba(148, 166, 190, 0.4)"
            : "0px 10px 39px 0px rgba(26, 56, 101, 0.21)",
      }}
    >
      <Sheader__pop_user_set_name
        style={{
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        {user.name}
      </Sheader__pop_user_set_name>
      <Sheader__pop_user_set_mail>{user.login}</Sheader__pop_user_set_mail>
      <Sheader__pop_user_set_theme>
        <p
          style={{
            color: theme === "light" ? "#fff" : "#000",
          }}
        >
          Темная тема
        </p>
        <input
          checked={theme === "dark"}
          onChange={onToggleTheme}
          type="checkbox"
          className="checkbox"
          name="checkbox"
        />
      </Sheader__pop_user_set_theme>
      <Sheader__a_main_new
        onClick={logout}
        to="/exit"
        style={{
          backgroundColor: theme === "light" ? "transparent" : "#fff",
          color: theme === "light" ? "#fff" : "#565eef",
          borderColor: theme === "light" ? "#fff" : "#565eef",
        }}
      >
        Выйти
      </Sheader__a_main_new>
    </Sheader__pop_user_set>
  );
}

export default PopUser;
