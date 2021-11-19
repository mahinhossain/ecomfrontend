import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Action";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Reducer.products);
  const [cart] = useState([]);
  const [loged] = useState(JSON.parse(localStorage.getItem("userloged")));

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(CartItemAdded(cart));
  }, [cart, loged]);

  const searchText = useSelector((state) => state.Reducer.searchText);
  const loading = useSelector((state) => state.Reducer.loading);

  return (
    <div className="container-fluid">
      {loading ? (
        <div className="d-flex justify-content-center text-center  fa-3x align-items-center mt-5">
          <div class="text-danger  spinner-border mt-5 " role="status">
            <span class="sr-only">Loading....................</span>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h2 className="text-center text-warning">Happy Shopping</h2>
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
      )}
    </div>
  );
}
