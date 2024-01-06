import { useState } from "react";

import { Loader } from "../components/Loader";

interface IUseLoader {
  init?: boolean;
  size?: number;
  containerMargin?: number;
}

export const useLoader = ({ init = true, size, containerMargin }: IUseLoader = {}) => {
  const [isLoading, setIsLoading] = useState(init);

  const loader: React.ReactNode = <Loader size={size} containerMargin={containerMargin} />;

  return { isLoading, setIsLoading, loader };
};
