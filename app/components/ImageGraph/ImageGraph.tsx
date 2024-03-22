import clsx from "clsx";
import { FilmsList } from "../../types/types";
import styles from "./imageGraph.module.scss";
import FilmsPosters from "../FilmsPosters/FilmsPosters";

interface ImageGraphProps {
  films: FilmsList[];
}

const posters = (films: FilmsList[]) => {
  return films.map((film, index) => {
    const imdbRatingNum = parseInt(film.imdbRating);
    const imdbRatingRound = Math.floor(imdbRatingNum);

    const backgroundPositionX =
      index === 0 ? 0 : `${(100 / (films.length - 1)) * index}%`;

    return (
      <div
        className={clsx(
          styles.imageGraphItem,
          styles[`imageGraphItem${imdbRatingRound}`]
        )}
        style={{ backgroundPositionX: backgroundPositionX }}
        key={index}
      >
      </div>
    );
  });
};

export default function ImageGraph({ films }: ImageGraphProps) {
  return (
    <div className={styles.imageGraph}>
      <FilmsPosters films={films} />
      <div className={styles.imageGraphHorse}>{posters(films)}</div>
    </div>
  );
}
