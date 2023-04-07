import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: IEvent[];
}

export const EventSlider: React.FC<IEventSlider> = ({
  title,
  subtitle,
  events,
}) => {
  return (
    <div className="app-container">
      <div className="pb-6 ">
        <h2 className="title-2 pt-6">{title}</h2>
        <p className="subtitle-2">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
          slidesPerView={3}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index}>
              <CardEvent
                title={event.title}
                short_description={event.short_description}
                image={event.image}
                votes={event.votes}
                url={event.url}
                photo={event.photo}
              />
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';
import { IEvent } from '../../../lib/interfaces/event.interface';
import { CardEvent } from './CardEvent';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
