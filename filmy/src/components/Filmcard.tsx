interface FilmProps {
  title: string;
  posterId: string;
}

function FilmCard(FilmProps) {
  return (
    <>
      <div className="w-96 flex flex-col items-center text-center mb-6  hover:scale-105 transition duration-300">
        <img
          src={FilmProps.posterId}
          className="shadow-[0_0px_10px_rgba(0,0,0,.5)] rounded-2xl"
        ></img>
        <p className="text-xl mt-2 font-bold">{FilmProps.title}</p>
      </div>
    </>
  );
}

export default FilmCard;
