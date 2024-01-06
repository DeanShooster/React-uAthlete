import { ScreenIntro } from "./ScreenIntro";
import { NewsFeed } from "./NewsFeed";

import "./index.scss";

export const HomePage = () => {
  return (
    <section>
      <ScreenIntro />
      <NewsFeed />
    </section>
  );
};
