import { DetailCard } from '../../components/details/DetailCard';
import Interest from '../../components/interests/Interest';
import { Layout } from '../../components/layout/Layout';
import Searcher from '../../components/navigation/searcher/Searcher';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';
export const Detail: NextPageWithLayout = () => {
  return (
    <div>
      <div className="mt-[20px]">
        <Searcher />
        <div className="bg-while mt-10">
          <DetailCard
            title={'Concierto de Laity gada'}
            short_description={
              'El concierto con la temática de Lady gaga en Las Vegas. El concierto con la temática de Lady gaga en Las Vegas.El concierto con la temática.'
            }
            image={'/mock-event-image.png'}
            votes={99203}
            url={'ladygaga-com'}
            photo={'/Vector.png'}
          />
        </div>
      </div>
      <Interest />
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
