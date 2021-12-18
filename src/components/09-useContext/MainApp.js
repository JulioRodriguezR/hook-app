import React, { useState } from 'react'

import { UserContext } from './UserContext';
import { AppRouter } from './AppRouter';
import './styles.css';

export const MainApp = () => {

  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser, temporal: '01' }}>
      <AppRouter />
    </UserContext.Provider>
  );

}
