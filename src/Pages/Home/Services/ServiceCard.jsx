import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    doctorName,
    treatName,
    honorPrice,
    imageUrl,
    categoryName,
    diseaseDescription,
    _id,
  } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <img src={imageUrl} alt="" />

      <div className="card-body ">
        <h2 className="card-title text-orange-500">{doctorName}</h2>
        <div className="text-rose-200">
          <p>{categoryName}</p>
          <p>{treatName}</p>
          <p>{diseaseDescription}</p>
          <p>Price: ${honorPrice}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="bg-orange-400 btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
