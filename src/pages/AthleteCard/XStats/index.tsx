import { useContext, useEffect, useState } from "react";
import { AthleteContext } from "../../../context/AthleteContext";
import { INav } from "..";

import "./index.scss";
import { XGraph } from "./XGraph";

interface IXStats {
  category: INav;
}

export const XStats = ({ category }: IXStats) => {
  const { athlete } = useContext(AthleteContext);
  const [selectedCategory, setSelectedCategory] = useState<any>([]);

  useEffect(() => {
    if (!athlete) return;

    const stateStructureHandler = (progress: any) => {
      const keys = Object.keys(progress),
        values = Object.values(progress);

      const stateStructure = [];
      for (let i = 0; i < keys.length; i++) stateStructure.push({ title: keys[i], data: values[i] });

      return stateStructure;
    };

    switch (category) {
      case "STRENGTH": {
        setSelectedCategory(stateStructureHandler(athlete.progress.strength));
        break;
      }
      case "ENDURANCE": {
        setSelectedCategory(stateStructureHandler(athlete.progress.endurance));
        break;
      }
      case "STAMINA": {
        setSelectedCategory(stateStructureHandler(athlete.progress.stamina));
        break;
      }
      default:
        setSelectedCategory([]);
    }
  }, [category, athlete]);

  return (
    <div className="x-category-stats-container">
      {selectedCategory.map((category: any, index: number) => {
        return <XGraph key={index} title={category.title} data={category.data} />;
      })}
    </div>
  );
};
