import { Rating } from "@mui/material";
import ProductZoom from "../../components/ProductZoom";
import QuantityBox from "../../components/QuantityBox";

import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import RelatedProducts from "./RelatedProducts";
const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);
  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light1 mr-2">Brands:</span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="text-light1 cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3 ">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ml-2">$14.00</span>
              </div>
              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt.Class aptent taciti sociosqu ad litora
                torquent
              </p>

              <div className=" productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      500g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round ml-3 ">
                  <BsCartFill /> &nbsp; Add to cart
                </Button>
                <Tooltip title="Add to wishlist" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4 ">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2 ">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />

          {/*  */}
          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>

              <br />

              {/*  */}

              {activeTabs === 0 && (
                <div className="tabContent">
                  Noodles & Company is an American fast-casual restaurant that
                  offers international and American noodle dishes and pasta in
                  addition to soups and salads. Noodles & Company was founded in
                  1995 by Aaron Kennedy and is headquartered in Broomfield,
                  Colorado. The company went public in 2013 and recorded a $457
                  million revenue in 2017. In late 2018, there were 460 Noodles
                  & Company locations across 29 states and Washington, D.C
                </div>
              )}

              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr class="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 35-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5"L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr class="folded-w-wheels">
                          <th>Folded(w/o wheels)</th>
                          <td>
                            <p>32.5"L x 24"W x 18.5"H</p>
                          </td>
                        </tr>
                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12" air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5"</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr class="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/474573457_1252513446047981_5112610751626644686_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tWQa6oIqXVwQ7kNvwHy50ew&_nc_oc=AdnSDPtStHCYlWhNhJ_9QZ7Ko5LP0DYBWe3-e5Tk4gthXgolHfLd0D4jqvLcW2TgHC0&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=TMYUrdlBpIybyJWjvtjO0w&oh=00_AfJlVaXwtyuZmYpcLZgSWvGcM6exHs53x8KmhjgoMCih8w&oe=683DC9DE" />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Xuan Anh Vu
                          </span>
                        </div>
                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light1">23/12/2002</h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>
                          <p>
                            Noodles & Company is an American fast-casual
                            restaurant that offers international and American
                            noodle dishes and pasta in addition to soups and
                            salads. Noodles & Company was founded in 1995 by
                            Aaron Kennedy and is headquartered in Broomfield,
                            Colorado. The company went public in 2013 and
                            recorded a $457 million revenue in 2017. In late
                            2018, there were 460 Noodles & Company locations
                            across 29 states and Washington, D.C
                          </p>
                        </div>
                      </div>
                      <br className="red-hide" />
                      <br className="red-hide" />

                      <form className="reviewForm">
                        <h4>Add a review</h4>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a Review"
                            name="review"
                          ></textarea>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button
                            type="submit"
                            className="btn-blue btn-lg btn-big btn-round"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>

                    {/*  */}
                    {/* <div className="col-md-4 pl-5 reviewBox">
                      <h4>Customer reviews</h4>
                      <div className="d-flex align-items-center mt-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4.5}
                          precision={0.5}
                          readOnly
                        />
                        <strong className="ml-3">4.5 out of 5</strong>
                      </div>
                      <br />

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">5 Stars</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "75%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">4 Stars</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "50%", height: "20px" }}
                          >
                            50%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">3 Stars</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "55%", height: "20px" }}
                          >
                            55%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">2 Stars</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "35%", height: "20px" }}
                          >
                            35%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">1 Star</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "25%", height: "20px" }}
                          >
                            25%
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          {/*  */}
          <RelatedProducts title="RELATED PRODUCTS" />
          <RelatedProducts title="RECENTLY VIEWED PRODUCTS" />
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
