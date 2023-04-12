import { useRouter } from 'next/router';
import { DetailCard } from '../../components/details/DetailCard';
import Interest from '../../components/interests/Interest';
import { Layout } from '../../components/layout/Layout';
import Searcher from '../../components/navigation/searcher/Searcher';

import { idPublications } from '../../lib/services/detailPublications.services';
import { NextPageWithLayout } from '../page';
export const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const { detail_id } = router.query;
  const {
    data: publicationResponse,
    error,
    isLoading,
    mutate,
  } = idPublications(detail_id);
  console.log(publicationResponse);

  return (
    <div>
      <div className="mt-[20px]">
        <Searcher />
        <div className="bg-while mt-10">
          <DetailCard
            title={'hola'}
            short_description={
              'El concierto con la temática de Lady gaga en Las Vegas. El concierto con la temática de Lady gaga en Las Vegas.El concierto con la temática.'
            }
            image={'/mock-event-image.png'}
            votes={99203}
            url={'ladygaga-com'}
            photo={'/Vector.png'}
            id={''}
          />
        </div>
      </div>
      <Interest />
      <div className="bg-while ">
        {/* <EventSlider
          title="Recientes"
          subtitle="Las personas ultimamente esta hablando de esto"
          events={publications}
        /> */}
      </div>
    </div>
  );
};

Detail.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Detail;
