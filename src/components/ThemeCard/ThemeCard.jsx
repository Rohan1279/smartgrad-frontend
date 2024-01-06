const ThemeCard = ({ img, heading, text }) => {
  return (
    <div className="w-52 flex-col space-y-4 text-[#595959]">
      <h3 className="text-center text-xl">
        <span className="font-extrabold">{heading?.slice(0, 1)}</span>
        <span>{heading?.slice(1)}</span>
      </h3>
      <div className="h-32">
        <img src={img} alt={heading} className="mx-auto " />
      </div>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default ThemeCard;
