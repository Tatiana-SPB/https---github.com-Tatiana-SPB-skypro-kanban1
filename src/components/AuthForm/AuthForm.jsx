import {
  Scontainer,
  Smodal,
  Smodal__block,
  Smodal__a,
  Smodal__form_group,
  Smodal__form,
  Smodal__input,
  Smodal__ttl,
  Swrapper,
} from "./AuthForm.styled.js";
import { Link, useNavigate } from "react-router-dom";

export function AuthForm({ isSignUp, setIsAuth = () => {} }) {
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
            <Smodal__ttl>{isSignUp ? "Регистрация" : "Вход"}</Smodal__ttl>
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
              <Smodal__a id="SignUpEnter" onClick={handleLogin}>
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </Smodal__a>

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
