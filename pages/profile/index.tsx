import Image from 'next/image';
import Header from '../../components/navigation/header/Header';
import { CardEvent } from '../../components/sliders/EventSlider/CardEvent';
import { eventsMock } from '../../lib/data/events.mock';

export default function ProfilePage() {
  return (
    <div>
      <Header />
      <div className="h-[129px] flex items-center justify-center bg-app-blue text-white title-6">
        <div className="relative top-[65px]">
          <Image
            className="  w-[117px] md:w-full "
            src="/photoProfile.png"
            alt="evetn"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="flex pt-20 items-center justify-center gap-5">
        <button className="rounded-3xl border-2 border-app-gray text-app-gray subtitle-5  w-[137px] p-2">
          Mis votos
        </button>
        <button className="rounded-3xl border-2 border-app-gray text-app-gray subtitle-5  w-[137px] p-2">
          Mis publicaciones
        </button>
      </div>
      <div className="flex items-center justify-center gap-4 p-10 flex-wrap">
        {eventsMock?.map((event, index) => (
          <div className="relative" key={index}>
            <CardEvent
              title={event.title}
              short_description={event.short_description}
              image={event.image}
              votes={event.votes}
              url={event.url}
              photo={event.photo}
              id={event.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
