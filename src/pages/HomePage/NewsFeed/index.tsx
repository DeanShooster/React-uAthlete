import { useCallback, useEffect, useState } from "react";
import { GetNewsFeed } from "../../../API/NewsFeed";
import { useLoader } from "../../../hooks/useLoader";
import { newsFeedLimit } from "../../../constants";

import { NewsItem } from "./NewsItem";

import "./index.scss";

export interface INewsFeed {
  image: string;
  title: string;
  date: Date;
  feed: string;
}

export const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = useState<INewsFeed[]>([]);
  const { isLoading, setIsLoading, loader } = useLoader();

  const initNewsFeed = useCallback(() => {
    (async () => {
      const newsFeedResult = await GetNewsFeed();
      if (!newsFeedResult.error) setNewsFeed(newsFeedResult);
      setIsLoading(false);
    })();
  }, [setIsLoading]);

  useEffect(() => {
    initNewsFeed();
  }, [initNewsFeed]);

  return (
    <div className="home-news-feed">
      <h1>News Feed</h1>
      {isLoading ? (
        loader
      ) : (
        <div className="news-feed-container">
          {newsFeed.map((newsItem: INewsFeed, index: number) => {
            if (index >= newsFeedLimit) return null;
            return <NewsItem key={index} newsItem={newsItem} />;
          })}
        </div>
      )}
    </div>
  );
};
