import styled from "styled-components";

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const SHeader__block = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const Scontainer = styled.div`
  width: 100%;
  padding: 0 68px;
`;

export const Sheader__nav = styled.div`
  max-width: 306px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sheader__user = styled.button`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  background: transparent;
  border: none;
  outline: none;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover,
  ._hover02:hover {
    color: #33399b;
  }
  &:hover::after,
  ._hover02:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Sheader__logo = styled.div`
  img {
    width: 85px;
  }
`;
