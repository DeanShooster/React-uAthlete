import { createContext, useEffect, useState } from "react";
import { GetMetaProData } from "../API/AthleteCard";
import { tokenName } from "../constants";

interface IStrength {
  benchPress: number;
  deadlift: number;
  squat: number;
  pullups: number;
  dips: number;
}

interface IEndurance {
  squat: number;
  pushups: number;
  situps: number;
  plank: number;
  pools: number;
  bike5KM: number;
}

interface IStamina {
  run3KM: number;
  run5KM: number;
  run10KM: number;
  sprint400M: number;
}

export interface IData {
  strength: IStrength;
  endurance: IEndurance;
  stamina: IStamina;
}

interface IMetaProData {
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
