import Sidebar from "../../components/Sidebar";

const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />
            <div className="content_right">
              <img
                src="https://shinyfood.vn/wp-content/uploads/2021/05/bacola-banner-18.jpg"
                className="w-100 "
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Listing;
