import {
  Scontainer,
  Smodal,
  Smodal__block,
  Smodal__btn_enter,
  Smodal__form_group,
  Smodal__form_login,
  Smodal__input,
  Smodal__ttl,
  Swrapper,
} from "./AuthForm.styled.js";
import { GlobalStyle } from "./GlobalStyle.js";
import { Link, useNavigate } from "react-router-dom";

export function AuthForm({ isSignUp, setIsAuth }) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    <Swrapper>
      <Scontainer>
        <Smodal>
          <Smodal__block>
            <Smodal__ttl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>;
            </Smodal__ttl>
            <Smodal__form id="form" action="#">
              {isSignUp && (
                <Smodal__input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <Smodal__input
                type="text"
                name="login"
                id="login"
                placeholder="Эл. почта"
              />
              <Smodal__input
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
              />
              <Smodal__btn id="SignUpEnter" onClick={handleLogin}>
                <a href="../main.html">
                  {isSignUp ? "Зарегистрироваться" : "Войти"}
                </a>
              </Smodal__btn>

              {isSignUp && (
                <Smodal__form_group>
                  <p>
                    Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                  </p>
                </Smodal__form_group>
              )}

              {!isSignUp && (
                <Smodal__form_group>
                  <p>
                    Нужно зарегистрироваться?
                    <Link to="/register">Регистрируйтесь здесь</Link>
                  </p>
                </Smodal__form_group>
              )}
            </Smodal__form>
          </Smodal__block>
        </Smodal>
      </Scontainer>
    </Swrapper>
  );
}

export default AuthForm;
