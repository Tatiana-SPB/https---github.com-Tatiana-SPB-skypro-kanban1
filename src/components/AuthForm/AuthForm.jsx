import { useContext, useState } from "react";
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
import { signIn, signUp } from "../../services/auth.js";
import { ThemeContext } from "../../context/contextAPI.js";
import { useAuth } from "../../context/contextAPI.js";

export function AuthForm({ isSignUp }) {
  const { theme } = useContext(ThemeContext);
  const { enter } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);
      if (data) {
        if (enter(data)) {
          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/");
        } else {
          setError("Неверные учётные данные");
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Swrapper
      style={{ backgroundColor: theme === "light" ? "#151419" : "#eaeef6" }}
    >
      <Scontainer>
        <Smodal>
          <Smodal__block
            style={{
              backgroundColor: theme === "light" ? "##20202C" : "#ffffff",
              border: theme === "light" ? "###4E5566" : "#d4dbe5",
            }}
          >
            <Smodal__ttl
              style={{ color: theme === "light" ? "#FFFFFF" : "#000000" }}
            >
              {isSignUp ? "Регистрация" : "Вход"}
            </Smodal__ttl>
            <Smodal__form id="form" action="#" onSubmit={handleSubmit}>
              {isSignUp && (
                <Smodal__input
                  $error={errors.name}
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <Smodal__input
                $error={errors.login}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <Smodal__input
                $error={errors.password}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Smodal__a id="SignUpEnter" $fullWidth={true}>
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
