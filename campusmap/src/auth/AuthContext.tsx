import * as React from 'react';
import { PropsWithChildren, ReactElement, useEffect, Context, createContext, useState } from 'react';

import useAxios from 'axios-hooks';

import { User } from 'campusmap/src/types';

const defaultUser: User = {
  casUser: 'Not authenticated',
  admin: false,
};

export const AuthContext: Context<User> = createContext(defaultUser);

export const AuthProvider = ({ children }: PropsWithChildren<{}>): ReactElement => {
  // const [user, setUser] = useState<User>(defaultUser);
  const [isLoading, setLoading] = useState<boolean>(true);

  const [{ data }, fetchUser] = useAxios<User>({
    url: '/api/cas/user',
  }, { manual: true });

  async function onLoad(): Promise<void> {
    try {
      await fetchUser();
      // setUser(data);
    } catch (e) {
      // if (e !== 'No current user') {
      //   alert(e);
      // }
    }

    setLoading(false);
  }

  useEffect(() => {
    onLoad();
  }, []);

  // if (!isLoading) setUser(data);

  return (
    <>{
      !isLoading && (
        <AuthContext.Provider value={data}>
          {children}
        </AuthContext.Provider>
      )
    }
    </>
  );
};

export default AuthContext;
