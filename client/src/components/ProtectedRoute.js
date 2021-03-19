import React, {useContext} from 'react';
import {Context} from './StoreProvider';
import {Redirect} from 'react-router-dom';

const ProtectedRoute = (props) => {
  
  const [user, setUser] = useContext(Context);
  const isAuthenticated = (user) ? true : false;
  
  const renderComponent = () => {
    const Component = props.component;
    if (isAuthenticated) {
      return (
        <Component />
      );
    }
    else {
      return (
        <Redirect to="/login" />
      );
    }
  }

  return renderComponent();
}

export default ProtectedRoute;