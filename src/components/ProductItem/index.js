import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductModal from "../ProductModal";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);

  const viewProductDetail = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/_nh_danh_m_c_3_090525.jpg"
            className="w-100"
          />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetail(1)}>
              <TfiFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>Áo sơ mi OWEN</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>

      {/* <ProductModal /> */}
    </>
  );
};
export default ProductItem;
