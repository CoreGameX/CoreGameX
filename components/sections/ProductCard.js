// components/ProductCard.jsx
import Link from "next/link";
import Countdown from '@/components/elements/Countdown'

const ProductCard = ({ image, avatar, delay, name, creatorName, price }) => {


  return (
    <div data-wow-delay={delay} className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div className="tf-card-box style-1">
        <div className="card-media">
          <Link href="#">
            <img src={image} alt="" />
          </Link>
          <span className="wishlist-button icon-heart" />
        </div>
        <h5 className="name"><Link href="#">{name}</Link></h5>
        <div className="author flex items-center">
          <div className="avatar">
            <img src={avatar} alt="Image" />
          </div>
          <div className="info">
            <span>Posted by:</span>
            <h6><Link href="/author-2">{creatorName}</Link></h6>
          </div>
        </div>
        <div className="divider" />
        <div className="meta-info flex items-center justify-between">
          <span className="text-bid">Current Price</span>
          <h6 className="price gem">$ {price}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
