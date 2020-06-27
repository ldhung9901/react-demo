import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Reducer/Cart";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  const dispatch = useDispatch()
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info" style={{ position: "relative" }}>
        {name}{" "}
        <a style={{ position: "absolute", right: "30px" }} onClick={()=>{dispatch(addToCart(room))}}>
          <MdAddShoppingCart style={{ fontSize: "20px" }} />
        </a>{" "}
      </p>
    </article>
  );
}
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
