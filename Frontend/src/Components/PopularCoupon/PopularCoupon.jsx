import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const coupons = [
  {
    id: 1,
    title: 'Cranium Disney Family Edition at Amazon',
    discount: '$30 OFF',
    daysLeft: '31 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30AMZ',
  },
  {
    id: 2,
    title: 'Popular Marvel Movies Titles on Amazon',
    discount: '$30 OFF',
    daysLeft: '5 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30MARVEL',
  },
  {
    id: 3,
    title: 'GoDaddy yearly hosting offer',
    discount: '$30 OFF',
    daysLeft: '43 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30GODADDY',
  },
  {
    id: 4,
    title: 'InterSport May Orders',
    discount: '$30 OFF',
    daysLeft: '22 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30SPORT',
  },
  {
    id: 5,
    title: 'Cranium Disney Family Edition at Amazon',
    discount: '$30 OFF',
    daysLeft: '31 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30AMZ2',
  },
  {
    id: 6,
    title: 'Popular Marvel Movies Titles on Amazon',
    discount: '$30 OFF',
    daysLeft: '5 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30MARVEL2',
  },
  {
    id: 7,
    title: 'GoDaddy yearly hosting offer',
    discount: '$30 OFF',
    daysLeft: '43 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30GODADDY2',
  },
  {
    id: 8,
    title: 'InterSport May Orders',
    discount: '$30 OFF',
    daysLeft: '22 days left',
    image: '/assets/newcoupons/2.jpg',
    couponCode: 'DEMO30SPORT2',
  },
];

const PopularCoupon = () => {
  return (
    <div className="w-full overflow-hidden md:px-14 ms: px-4 py-8" id='popularcoupon'>
      <h2 className="text-xl font-semibold pl-4 mb-6">Popular Coupons</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false,reverseDirection: true, }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="pb-8"
      >
        {coupons.map((coupon) => (
          <SwiperSlide key={coupon.id} className="!h-[390px]">
            <div className="group bg-white hover:bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col">
              <img
                src={coupon.image}
                alt={coupon.title}
                style={{imageRendering:'auto'}}
                className="w-full h-48 object-cover rounded-t-lg image-render-crisp"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-md font-semibold mb-1">{coupon.title}</h3>
                <div className="text-orange-500 font-bold text-lg">{coupon.discount}</div>
                <p className="text-gray-500 text-sm">{coupon.daysLeft}</p>
                <a
                  href={`https://wa.me/919715630166?text=${encodeURIComponent(
                    `Hi, I want to avail the coupon: ${coupon.title} (${coupon.discount}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-center bg-orange-500 group-hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  AVAIL NOW
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCoupon;
