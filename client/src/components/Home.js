import { Button } from '@material-ui/core';
import React, {useContext} from 'react';
import {Context} from './StoreProvider';
const Home = () => {

  const [user, setUser] = useContext(Context);

  const checkIfEmpty = () => {
   if (user)
      return false;
    return true;
  }

  return (
    <div>
      <h1>Home</h1>
      {!checkIfEmpty() && <h1>Welcome back {user.name}!</h1> }
      <Button onClick={() => {window.myProp = 1; window.alert(`MyProp= ${window.myProp}`);}}>
        Test
      </Button>
    </div>
  )
}

export default Home;