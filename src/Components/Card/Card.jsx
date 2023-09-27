import { Link } from "react-router-dom";

const Card = ({ donation }) => {
//   console.log(donation);
  const { id, picture, title, category, category_bg, text_button_bg, card_bg } =
    donation;

  return (
    <>
      <Link to={`/details/${id}`}>
        <div
          className="cursor-pointer flex flex-col justify-between rounded-md"
          style={{ backgroundColor: `${card_bg}` }}
        >
          <div>
            <img
              className="w-full h-44 object-cover rounded-t-md"
              src={picture}
              alt={"img"}
            />
          </div>
          <div className="px-4 py-3 space-y-2">
            <div>
              <h5
                className="inline-block px-1"
                style={{
                  backgroundColor: `${category_bg}`,
                  color: `${text_button_bg}`,
                }}
              >
                {category}
              </h5>
            </div>
            <div>
              <h3 className="font-semibold" style={{ color: `${text_button_bg}` }}>{title}</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
