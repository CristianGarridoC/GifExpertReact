import {Gif} from "../interfaces/Gif";

export const GifItem = ({title, url }: Gif) => {
    return (
      <div className="card">
          <img src={url} alt={title} />
          <p>{title}</p>
      </div>
    );
};