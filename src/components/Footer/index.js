import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <LuShirt />
            </span>
            <span className="ml-2">Sản phẩm tươi mới mỗi ngày</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Freeship cho đơn trên 100k</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <TbDiscount />
            </span>
            <span className="ml-2">Giảm giá siêu hấp dẫn mỗi ngày</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2">Giá tốt nhất trên thị trường</span>
          </div>
        </div>

        {/* Wrap */}
        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>RAU CỦ & TRÁI CÂY</h5>
            <ul>
              <li>
                <Link to="#">Rau tươi</Link>
              </li>
              <li>
                <Link to="#">Gia vị & Rau thơm</Link>
              </li>
              <li>
                <Link to="#">Trái cây tươi</Link>
              </li>
              <li>
                <Link to="#">Rau cắt sẵn & Mầm cây</Link>
              </li>
              <li>
                <Link to="#">Trái cây & rau củ nhập khẩu</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm đóng gói</Link>
              </li>
              <li>
                <Link to="#">Khay tiệc rau củ</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>BỮA SÁNG & SẢN PHẨM TỪ SỮA</h5>
            <ul>
              <li>
                <Link to="#">Sữa & Sữa có hương vị</Link>
              </li>
              <li>
                <Link to="#">Bơ và Margarine</Link>
              </li>
              <li>
                <Link to="#">Phô mai</Link>
              </li>
              <li>
                <Link to="#">Trứng và các sản phẩm thay thế</Link>
              </li>
              <li>
                <Link to="#">Mứt trái cây</Link>
              </li>
              <li>
                <Link to="#">Kem chua & Nước xốt</Link>
              </li>
              <li>
                <Link to="#">Sữa chua</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>THỊT & HẢI SẢN</h5>
            <ul>
              <li>
                <Link to="#">Xúc xích ăn sáng</Link>
              </li>
              <li>
                <Link to="#">Xúc xích ăn tối</Link>
              </li>
              <li>
                <Link to="#">Thịt gà</Link>
              </li>
              <li>
                <Link to="#">Thịt nguội cắt lát</Link>
              </li>
              <li>
                <Link to="#">Tôm</Link>
              </li>
              <li>
                <Link to="#">Cua & Hải sản có vỏ</Link>
              </li>
              <li>
                <Link to="#">Khay tiệc hải sản</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>ĐỒ UỐNG</h5>
            <ul>
              <li>
                <Link to="#">Nước lọc</Link>
              </li>
              <li>
                <Link to="#">Nước có ga</Link>
              </li>
              <li>
                <Link to="#">Nước ngọt & soda</Link>
              </li>
              <li>
                <Link to="#">Cà phê</Link>
              </li>
              <li>
                <Link to="#">Sữa & sữa thực vật</Link>
              </li>
              <li>
                <Link to="#">Trà & Kombucha</Link>
              </li>
              <li>
                <Link to="#">Hộp nước trái cây & túi uống</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>BÁNH MÌ & BÁNH NGỌT</h5>
            <ul>
              <li>
                <Link to="#">Sữa & Sữa có hương vị</Link>
              </li>
              <li>
                <Link to="#">Bơ và Margarine</Link>
              </li>
              <li>
                <Link to="#">Phô mai</Link>
              </li>
              <li>
                <Link to="#">Trứng và các sản phẩm thay thế</Link>
              </li>
              <li>
                <Link to="#">Mứt trái cây</Link>
              </li>
              <li>
                <Link to="#">Kem chua & Nước xốt</Link>
              </li>
              <li>
                <Link to="#">Sữa chua</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copy right */}
        <div className="copyright mt3 pt-3 pb-3 d-flex">
          <p className="mb-0">
            © {new Date().getFullYear()} by Xuan Anh Vu. All rights reserved.
          </p>
          <ul className="list list-inline ml-auto mb-0 socials">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <CiLinkedin />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
