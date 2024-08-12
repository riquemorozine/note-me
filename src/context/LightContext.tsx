import { createContext, useContext, useState } from "react";

export interface ILightContext {
  setLight: (value: boolean) => void;
  getLight: () => boolean;
}

const LightContext = createContext<ILightContext>({} as ILightContext);

export const LightProvider = ({ children }: any) => {
  const [lightResult, setLightResult] = useState(false);

  const setLight = (value: boolean) => {
    setLightResult(value);
  };

  const getLight = () => {
    return lightResult;
  };

  return (
    <LightContext.Provider value={{ setLight, getLight }}>
      {children}
    </LightContext.Provider>
  );
};

export const useLight = () => {
  return useContext(LightContext);
};
