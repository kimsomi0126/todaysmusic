import { useState } from 'react';
import { Heart } from '../styles/main/musicListStyle';

const HeartIcon = (item: any) => {
  const [heartCheck, setHeartCheck] = useState(false);
  console.log(item);

  return (
    <Heart
      className={heartCheck ? 'on' : ''}
      onClick={() => setHeartCheck(!heartCheck)}
    />
  );
};

export default HeartIcon;
