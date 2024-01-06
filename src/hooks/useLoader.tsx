import { useState } from "react";

import { Loader } from "../components/Loader";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loader: React.ReactNode = <Loader />;

  return { isLoading, setIsLoading, loader };
};
