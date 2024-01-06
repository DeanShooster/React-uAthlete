import { createContext } from "react";

export const AthleteContext = createContext({});

type Props = { children: React.ReactNode };

export const AthleteContextProvider = ({ children }: Props) => {
  return <AthleteContext.Provider value={{}}>{children}</AthleteContext.Provider>;
};
