import { TextIntro } from "./TextIntro";
import { ImageIntro } from "./ImageIntro";

import "./index.scss";

export const ScreenIntro = () => {
  return (
    <div className="home-screen-intro">
      <div>
        <TextIntro />
        <ImageIntro />
      </div>
    </div>
  );
};
