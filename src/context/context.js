import React, {createContext, useState, useEffect} from 'react';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

export const Context = createContext();

export function Provider({children}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    restoreProgress();
  }, []);

  const restoreProgress = () => {
    // eslint-disable-next-line radix
    const tempProgress = parseInt(AsyncStorage.getItem('progress'));

    if (tempProgress) setProgress(tempProgress);
  };

  const addProgress = recentProgres => {
    setProgress(progress + recentProgres);
    AsyncStorage.setItem('progress', progress);
  };

  return (
    <Context.Provider
      value={{
        progress,
        addProgress,
      }}>
      {children}
    </Context.Provider>
  );
}
