import { useDispatch, useSelector } from "react-redux";
import { CartItemAdded, getProducts } from "../../Redux/Action";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Reducer.products);
  const [cart, setCart] = useState([]);
  const [loged, setlogeduser] = useState(
    JSON.parse(localStorage.getItem("userloged"))
  );

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(CartItemAdded(cart));
  }, [cart, loged]);

  const searchText = useSelector((state) => state.Reducer.searchText);

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

  const options = {
    items: 1,
    nav: true,
    navText: [
      "<div className='nav-btn prev-slide'></div>",
      "<div className='nav-btn next-slide'></div>",
    ],
    rewind: true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true,
  };
  return (
    <div className="container-fluid">
      <h2 className="text-center text-warning">Happy Shopping</h2>

      {/* <OwlCarousel
        autoplayTimeout={1000}
        autoplay={true}
        items={4}
        className="owl-theme"
        margin={8}
        className="mb-5"
        // options={options}
      >
        {state.map((item) => (
          <div className="bg-light  shadow-lg card-header ">
            {" "}
            <p className="text-center text-truncate">{item.name}</p>
            <img
              className="card-img-top img-fluid p-4 w-75"
              src={item.img}
              alt="name"
            />
          </div>
        ))}
      </OwlCarousel> 

      <Carousel autoPlay interval={1000}>
        {state.map((item) => (
          <div className=" shadow-lg">
            <img src={item.img} className="w-25" />
            {/* <p className="legend"></p> */}
      {/* <h4 className="bg-white text-danger mt-5 card-footer">
              {item.name}
            </h4>
          </div>
        ))}
      </Carousel> */}

      <div className="row">
        {products
          .filter((fitem) =>
            fitem.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => (
            <div className="col-md-3  mb-2" key={item._id}>
              {" "}
              {/* <Link to={"/productDetails/" + item.id}> */}
              <div class="card  w-75  shadow-2xl ">
                <Link to={"/productDetails/" + item._id}>
                  {" "}
                  <img
                    className="card-img-top img-fluid p-3 "
                    src={item.img}
                    alt="name"
                  />
                </Link>

                <div class="card-body">
                  <p className="text-truncate">{item.name}</p>
                  <div className="row  ">
                    {" "}
                    <p className="btn-success badge-success badge">
                      Seller:{item.brand}
                    </p>
                    <p className="btn-primary badge-warning badge">
                      Price:{item.price}
                    </p>
                    {item.inStock == 0 ? (
                      <p className="btn-danger badge-warning badge   ">
                        Out of Stock
                      </p>
                    ) : (
                      <p className="  badge-warning badge text-dark">
                        In Stock:{item.inStock}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
      </div>
      <div className="row"></div>
    </div>
  );
}
