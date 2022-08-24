import React, { useEffect } from 'react';
import type { NextPage } from 'next';

import { Ctx } from '../context/context';


const Home: NextPage = () => {
  //@ts-ignore
  const { authUser } = React.useContext(Ctx);


  return (
    <div>
      {Array(100).fill('dfghjklkjhgfdsfghjkl').map((elem, idx) => <p>{elem}</p>)}
    </div>

  )
}

export default Home
