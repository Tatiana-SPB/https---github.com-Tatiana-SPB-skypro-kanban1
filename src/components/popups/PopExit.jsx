import { Link, useNavigate } from "react-router-dom";
import {
  Spop_exit,
  Spop_exit__block,
  Spop_exit__container,
  Spop_exit__exit_no,
  Spop_exit__exit_yes,
  Spop_exit__form_group,
  Spop_exit__ttl,
} from "./PopExit.styled.js";
import { useContext } from "react";
import { AuthContext, ThemeContext } from "../../context/contextAPI.js";

export function PopExit({ isPopExit, onClose }) {
  const { theme } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    onClose?.();
    navigate("/login");
  }

  const handleStay = () => {
    onClose?.();
  };

  if (!isPopExit) return null;

  return (
    <Spop_exit id="popExit">
      <Spop_exit__container
        style={{
          background:
            theme === "light" ? "rgba(21, 20, 25, 1)" : "rgba(0, 0, 0, 0.4)",
        }}
      >
        <Spop_exit__block
          style={{
            backgroundColor: theme === "light" ? "#20202C" : "#ffffff",
            border: theme === "light" ? "#4E5566" : "#d4dbe5",
          }}
        >
          <Spop_exit__ttl>
            <h2
              style={{
                color: theme === "light" ? "#fff" : "#000",
              }}
            >
              Выйти из аккаунта?
            </h2>
          </Spop_exit__ttl>

          <Spop_exit__form_group>
            <Spop_exit__exit_yes
              to="/login"
              id="exitYes"
              onClick={handleLogout}
            >
              Да, выйти
            </Spop_exit__exit_yes>
            <Spop_exit__exit_no
              onClick={handleStay}
              id="exitNo"
              style={{
                backgroundColor: theme === "light" ? "transparent" : "#fff",
                color: theme === "light" ? "#fff" : "#565eef",
                borderColor: theme === "light" ? "#fff" : "#565eef",
              }}
            >
              Нет, остаться
            </Spop_exit__exit_no>
          </Spop_exit__form_group>
        </Spop_exit__block>
      </Spop_exit__container>
    </Spop_exit>
  );
}
