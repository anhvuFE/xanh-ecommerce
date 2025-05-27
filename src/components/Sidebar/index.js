import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [value, setValue] = useState([100, 60000]);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h6>DANH MỤC SẢN PHẨM</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Nam"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Nữ"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Làm đẹp"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Đồng hồ"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Trẻ em"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Quà tặng"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>LỌC THEO GIÁ</h6>
          <RangeSlider
            value={value}
            onInput={setValue}
            min={100}
            max={60000}
            step={5}
          />
          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              Từ: <strong className="text-dark">Rs: {value[0]}</strong>
            </span>
            <span className="ml-auto">
              Đến: <strong className="text-dark">Rs: {value[1]}</strong>
            </span>
          </div>
        </div>

        <div className="filterBox">
          <h6>TÌNH TRẠNG SẢN PHẨM</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Còn hàng"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Đang giảm giá"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>THƯƠNG HIỆU</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Frito Lay"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Nespresso"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Oreo"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Quaker"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Welch's"
                />
              </li>
            </ul>
          </div>
        </div>

        <Link to="#">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
            className="w-100"
            alt="Banner khuyến mãi"
          />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
