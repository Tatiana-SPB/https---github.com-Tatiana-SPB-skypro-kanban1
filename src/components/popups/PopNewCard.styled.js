import { Link } from "react-router-dom";
import styled from "styled-components";

export const SpopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  &:target {
    display: block;
  }

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const SpopNewCard_container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const SpopNewCard_block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const SpopNewCard_content = styled.div`
  display: block;
  text-align: left;
`;

export const SpopNewCard_ttl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const SpopNewCard_close = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const SpopNewCard_wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const SpopNewCard_form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const Sform_new__block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Ssubttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const Sform_new__input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const Sform_new__area = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const SpopNewCard_calendar = styled.div`
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const Scalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const Scalendar__ttl = styled.div`
  margin-bottom: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const Scalendar__block = styled.div`
  display: block;
`;

export const Scalendar__nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const Scalendar__month = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const Scalendar__period = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const Snav__actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Snav__action = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: #94a6be;
  }
`;

export const Scalendar__p = styled.div`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  & span {
    color: #000000;
  }
`;

export const Scategories = styled.div`
  margin-bottom: 20px;
`;

export const Scategories__p = styled.p`
  margin-bottom: 14px;
`;

export const Scategories__themes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const Sactive_category = styled.div`
  opacity: 1 !important;
`;

export const Sform_new__create = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  &:hover {
    background-color: #33399b;
  }
`;
