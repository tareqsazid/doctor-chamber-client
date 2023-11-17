const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, email, honorPrice, date, imageurl, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm border-t-pink-700 btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {imageurl && <img src={imageurl} alt="" />}
          </div>
        </div>
      </td>

      <td>{email}</td>
      <td>{date}</td>
      <td>${honorPrice}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-orange-950">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost p-1 btn-xs font-bold text-lg text-orange-500"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
