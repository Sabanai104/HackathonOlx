import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = createContext();

export function Provider({children}) {
  const [progress, setProgress] = useState(0);
  const [coin, setCoin] = useState(0);

  useEffect(() => {
    console.log({progress});
  }, [progress]);

  const restoreProgress = async () => {
    // eslint-disable-next-line radix
    const tempProgress = parseInt(await AsyncStorage.getItem('progress'));

    if (tempProgress) setProgress(tempProgress.toString());
  };

  const addProgress = async recentProgres => {
    setProgress(progress + recentProgres);
    await AsyncStorage.setItem('progress', progress.toString());
  };

  const settingProgress = async newProgress => {
    setProgress(newProgress);
    await AsyncStorage.setItem('progress', progress.toString());
  };

  const settingCoin = async coins => {
    setCoin(coins);
    await AsyncStorage.setItem('coin', coin.toString());
  }


  return (
    <Context.Provider
      value={{
        progress,
        addProgress,
        settingProgress,
        coin,
        settingCoin,
      }}>
      {children}
    </Context.Provider>
  );
}
