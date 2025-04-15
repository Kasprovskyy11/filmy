interface FilmProps {
  title: string;
  posterId: string;
}

function FilmCard(FilmProps) {
  return (
    <>
      <div>{FilmProps.title}</div>
    </>
  );
}

export default FilmCard;
