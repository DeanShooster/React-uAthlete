import { createContext, useEffect, useState } from "react";
import { IsAuth } from "../API/Authentication";
import { tokenName } from "../constants";
import { useLoader } from "../hooks/useLoader";

interface IAthleteContext {
  athlete: IAthlete | null;
  setAthlete: Function;
}

interface IAthlete {
  email: string;
  personalDetails: {
    name: string;
    gender: boolean;
    weight: number;
    height: number;
  };
  athleteRank: number;
  progressionUpdates: Date[];
  progress: {
    strength: {
      benchPress: number[];
      deadlift: number[];
      squat: number[];
      pullups: number[];
      dips: number[];
    };
    endurance: {
      squat: number[];
      pushups: number[];
      situps: number[];
      plank: number[];
      pools: number[];
      bike5KM: number[];
    };
    stamina: {
      run3KM: number[];
      run5KM: number[];
      run10KM: number[];
      sprint400M: number[];
    };
  };
}

export const AthleteContext = createContext<IAthleteContext>({
  athlete: null,
  setAthlete: () => {},
});

type Props = { children: React.ReactNode };

export const AthleteContextProvider = ({ children }: Props) => {
  const [athlete, setAthlete] = useState<IAthlete | null>(null);
  const { isLoading, setIsLoading, loader } = useLoader({ containerMargin: 250, size: 150 });

  useEffect(() => {
    (async () => {
      const isAuthResult = await IsAuth(localStorage.getItem(tokenName));
      if (isAuthResult.athlete) setAthlete(isAuthResult.athlete);
      else {
        localStorage.removeItem(tokenName);
        setAthlete(null);
      }
      setIsLoading(false);
    })();
  }, [setIsLoading]);

  return <AthleteContext.Provider value={{ athlete, setAthlete }}>{isLoading ? loader : children}</AthleteContext.Provider>;
};
