import { useState } from 'react';
import { Heart } from '../styles/main/musicListStyle';

const HeartIcon = () => {
  const [heartCheck, setHeartCheck] = useState(false);

  return (
    <Heart
      className={heartCheck ? 'on' : ''}
      onClick={() => setHeartCheck(!heartCheck)}
    />
  );
};

export default HeartIcon;
