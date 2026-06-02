import styled from "styled-components";
import { Link } from "react-router-dom";

const Sheader__a_main_new = styled(Link)`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export function PopUser({ isPopUser }) {
  if (!isPopUser) return null;

  return (
    <div className="header__pop-user-set pop-user-set">
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <Sheader__a_main_new to="/exit">Выйти</Sheader__a_main_new>
    </div>
  );
}

export default PopUser;
