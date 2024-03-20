import styled from '@emotion/styled';

export const WeatherWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 45vh;
`;

export const WeatherInfo = styled.div`
  width: 100%;
  height: 100%;
`;
export const WeatherImg = styled.div`
  position: absolute;
  right: -3rem;
  top: 50%;
  transform: translate(15rem, -50%);
`;

export const WeatherText = styled.div`
  position: absolute;
  left: 0;
  bottom: 10%;
  font-size: 1.8rem;

  h2 {
    display: inline-block;
    font-size: 7rem;
    span {
      font-weight: 100;
    }
  }
  li {
    margin-bottom: 0.5rem;
    font-weight: 300;
  }
  b {
    font-weight: 500;
  }
`;

export const BgObject = styled.div`
  position: absolute;
  opacity: 0.5;
  width: 8rem;
  height: 4rem;
  background: url(/images/bg_obj.svg) no-repeat center/auto 100%;

  &.obj01 {
    right: 25%;
    top: 70%;
  }
  &.obj02 {
    width: 9rem;
    height: 5rem;
    left: 23%;
    top: 5%;
  }
  &.obj03 {
    width: 8rem;
    height: 4rem;
    right: 0%;
    top: 18%;
  }
`;
