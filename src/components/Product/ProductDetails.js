import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./productscss.css";
import StarRatings from "react-star-ratings";
import { getProduct, CartItemAdded } from "../../Redux/Action";
import { Button } from "@nextui-org/react";
export default function ProductDetails() {
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  const product = useSelector((state) => state.Reducer.product);
  console.log("product :>> ", product);

  // const [state, setstate] = useState(dataFromReducer);
  const addedToCart = (item) => {
    // console.log("item :>> ", item);
    dispatch(CartItemAdded(item));
    // Swal.fire("Already Added", "", "error");
    // item.quantity = 1;

    // const newCart = [...cart, item];
    // const samePro = newCart.filter((same) => same._id == item._id);
    // // console.log("samePro.length :>> ", samePro.length);

    // if (samePro.length > 1) {
    //   return false;
    // }
    // Swal.fire(" Added to Cart", "", "success");
    // setCart(newCart);
  };
  return (
    <div class="container">
      <div class=" row" id="ads">
        <div class="card-image col-md-4 card">
          {/* <span class="card-notify-badge"> </span> */}
          <img class="img-fluid" src={product.img} alt="Alternate Text" />
        </div>
        <div class=" rounded col-md-8 card justify-content-evenly">
          {/* <div class="card-image-overlay "> */}
          <h3 className="text-danger">{product.name}</h3>
          <div className="d-flex justify-content-between">
            {" "}
            <p class="badge-danger badge badge-pill">Brand New</p>
            <p class="  badge-danger badge-pill">$ {product.price}</p>
            <StarRatings
              className="badge-danger badge-pill"
              rating={product.rating}
              starRatedColor="yellow"
              // changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="5px"
            />
          </div>

          <span class="card-detail-badge">In Stock: {product.inStock}</span>
          <span class="card-detail-badge">category: {product.category}</span>
          <span class="card-detail-badge">In Stock: {product.brand}</span>
          <span class="">Description: {product.desccription}</span>
          <Button class=" badge-danger badge">Stock: {product.inStock}</Button>
          <span className="d-flex   justify-content-end">
            {" "}
            <button
              class="  btn-success btn w-50 m-2 badge-pill "
              onClick={() => addedToCart(product)}
            >
              {" "}
              Add tocart
            </button>
          </span>
        </div>

        {/* <div class="card-body text-center">
              sds
              <div class="ad-title "></div>
              <a class="ad-btn" href="#">
                View
              </a>
            </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}
