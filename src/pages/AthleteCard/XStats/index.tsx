import { useContext, useEffect, useState } from "react";
import { AthleteContext } from "../../../context/AthleteContext";
import { INav } from "..";

import { XGraph } from "./XGraph";
import { EmptyCategory } from "./EmptyCategory";

import "./index.scss";
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

  let isEmptyCategory = true;
  for (let i = 0; i < selectedCategory.length; i++) {
    if (selectedCategory[i].data.length > 0) {
      isEmptyCategory = false;
      break;
    }
  }

  return (
    <div className="x-category-stats-container">
      {!isEmptyCategory ? (
        selectedCategory.map((item: any, index: number) => {
          return <XGraph key={index} title={item.title} data={item.data} category={category} />;
        })
      ) : (
        <EmptyCategory />
      )}
    </div>
  );
};
