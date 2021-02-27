import * as React from 'react';
import { PropsWithChildren, ReactElement } from 'react';
import { Context, createContext, useState } from 'react'; 
import useAxios from 'axios-hooks';

import { User } from 'campusmap/src/types';

const defaultUser: User = {
  casUser: 'Not authenticated',
  admin: false,
}

export const AuthContext: Context<User> = createContext(defaultUser);

export const AuthProvider = ({ children }: PropsWithChildren<{}>): ReactElement => {
  // const [user, setUser] = useState<User>(defaultUser);

  const [{ data, loading }] = useAxios<User>({
    url: '/api/cas/user',
  }, { manual: false });
  
  // if (!loading) setUser(data);

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
