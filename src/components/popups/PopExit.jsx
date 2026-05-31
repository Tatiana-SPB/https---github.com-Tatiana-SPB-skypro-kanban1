import { Link, useNavigate } from "react-router-dom";
import { Spop_exit__exit_yes } from "./PopExit.styled.js";

export function PopExit({ setIsAuth }) {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    setIsAuth(false);
    navigate("/login");
  }

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form
            className="pop-exit__form"
            id="formExit"
            action="#"
            onSubmit={handleLogout}
          >
            <div className="pop-exit__form-group">
              <Spop_exit__exit_yes
                to="/login"
                id="exitYes"
                onClick={handleLogout}
              >
                Да, выйти
              </Spop_exit__exit_yes>
              <Link to="/" className="pop-exit__exit-no _hover03" id="exitNo">
                Нет, остаться
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
