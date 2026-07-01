import styled from "styled-components";

export const Smain__column = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const Scolumn__title = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  & p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const Scards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const Card_load = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const Item1__load = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Item1_left_load = styled.div`
  border-radius: 20px;
  width: 82px;
  height: 20px;
  background: linear-gradient(
    90deg,
    #c1cddc -6.32%,
    #e9eef7 46.75%,
    #c1cddc 106.46%
  );
`;

export const Item1_right_load = styled.div`
  width: 18px;
  height: 4px;
  background: linear-gradient(
    90deg,
    #c1cddc -6.32%,
    #e9eef7 46.75%,
    #c1cddc 106.46%
  );
`;

export const Item2__load = styled.div`
  margin-top: 15px;
  width: 113px;
  height: 15px;
  background: linear-gradient(
    90deg,
    #c1cddc -6.32%,
    #e9eef7 46.75%,
    #c1cddc 106.46%
  );
`;

export const Item3__load = styled.div`
  margin-top: 35px;
  width: 58px;
  height: 13px;
  background: linear-gradient(
    90deg,
    #c1cddc -6.32%,
    #e9eef7 46.75%,
    #c1cddc 106.46%
  );
`;
