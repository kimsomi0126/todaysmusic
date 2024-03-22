import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LoadingWrap = styled.div`
  position: relative;
  color: #fff;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
`;

export const LoadingWeather = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  span {
    margin-top: 0.5rem;
  }
`;

export const LoadingMusic = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;

export const LoadingBoxWrap = styled.div`
  position: relative;
`;
export const LoadingBox = styled(motion.div)`
  width: 4.5rem;
  height: 4.5rem;
  background: rgba(0, 0, 0, 0.5);
  margin: 1rem auto 0;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 1.9rem;
  }
`;
