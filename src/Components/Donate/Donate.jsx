import PropTypes from 'prop-types';

const Donate = ({donate}) => {
    const {picture, title, category, price, card_bg, category_bg, text_button_bg} = donate;
    return (
        <>
            <div className={`flex gap-5 items-center justify-between md:justify-normal`} style={{backgroundColor:`${card_bg}`}}>
                <div className="w-1/2 md:w-auto">
                    <img className="w-40 h-36 object-cover" src={picture} alt="" />
                </div>
                <div className="space-y-1 py-2 w-1/2 md:w-auto">
                    <h5 className="inline-block px-2 rounded-sm py-1 text-xs" style={{backgroundColor:`${category_bg}`,color:`${text_button_bg}`}}>{category}</h5>
                    <h3 className="text-sm md:text-xl">{title}</h3>
                    <p className="text-lg font-semibold" style={{color:`${text_button_bg}`}}>${price}</p>
                    <button className="px-4 py-1 text-base md:text-lg rounded-lg text-white" style={{backgroundColor:`${text_button_bg}`}}>View Details</button>
                </div>
            </div>
        </>
    );
};

Donate.propTypes = {
    donate: PropTypes.object.isRequired,
}

export default Donate;