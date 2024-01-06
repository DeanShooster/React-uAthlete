import { INewsFeed } from "..";
import { formatDateToLongString } from "../../../../utils/date";

import "./index.scss";

interface INewsItem {
  newsItem: INewsFeed;
}

export const NewsItem = ({ newsItem }: INewsItem) => {
  return (
    <div className="news-feed-wrapper">
      <img alt="" src={newsItem.image} />
      <div className="news-info-wrapper">
        <div>
          <h2>{newsItem.title}</h2>
          <time>{formatDateToLongString(newsItem.date)}</time>
        </div>
        <p>{newsItem.feed}</p>
      </div>
    </div>
  );
};
