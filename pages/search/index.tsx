import { SearchCard } from '../../components/details/SearchCard';
import { Layout } from '../../components/layout/Layout';
import SearchDeployed from '../../components/navigation/searcher/SearchDeployed';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';
export const Detail: NextPageWithLayout = () => {
  return (
    <div>
      <div className="mt-[20px]">
        <SearchDeployed />
        <div className="bg-while app-container  ">
          {eventsMock?.map((event, index) => (
            <SearchCard
              key={index}
              title={event.image}
              short_description={event.short_description}
              image={event.image}
              votes={event.votes}
              url={event.url}
              photo={event.photo}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="px-4 py-2 bg-app-grayLighter"></button>
          <button className="px-4 py-2 focus:bg-app-gray">1</button>
          <button className="px-4 py-2 focus:bg-app-gray">2</button>
          <button className="px-4 py-2 focus:bg-app-gray">3</button>
          <button className="px-4 py-2 bg-app-grayLighter"></button>
        </div>
      </div>
      <div className="bg-while ">
        <EventSlider
          title="Recientes"
          subtitle="Las personas ultimamente esta hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};

Detail.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Detail;
