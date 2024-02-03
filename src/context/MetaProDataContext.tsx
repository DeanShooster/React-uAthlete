import { createContext, useEffect, useState } from "react";
import { GetMetaProData } from "../API/AthleteCard";
import { tokenName } from "../constants";

interface IData {
  strength: number;
  endurance: number;
  stamina: number;
}

interface IMetaProData {
  athleteData: IData;
  metaData: IData;
  proData: IData;
}

interface IMetaProDataContext {
  metaProData: IMetaProData | null;
  setMetaProData: Function;
}

export const MetaProDataContext = createContext<IMetaProDataContext>({
  metaProData: null,
  setMetaProData: () => {},
});

type Props = { children: React.ReactNode };

export const MetaProDataContextProvider = ({ children }: Props) => {
  const [metaProData, setMetaProData] = useState<IMetaProData | null>(null);

  useEffect(() => {
    (async () => {
      const metaProDataResult = await GetMetaProData(localStorage.getItem(tokenName));
      if (metaProDataResult) setMetaProData(metaProDataResult);
      else {
        localStorage.removeItem(tokenName);
        setMetaProData(null);
      }
    })();
  }, []);

  return (
    <MetaProDataContext.Provider
      value={{
        metaProData,
        setMetaProData,
      }}
    >
      {children}
    </MetaProDataContext.Provider>
  );
};
