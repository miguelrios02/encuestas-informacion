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
  console.log(detail_id);
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
            title={
              publicationResponse?.results.title !== undefined
                ? publicationResponse.results.title
                : 'sin nombre'
            }
            short_description={
              publicationResponse?.results.description !== undefined
                ? publicationResponse.results.description
                : 'sin descripcion'
            }
            image={
              publicationResponse?.results.images[0] !== undefined
                ? publicationResponse?.results.images[0].image_url
                : '/withoutPhoto.PNG'
            }
            votes={
              publicationResponse?.results.votes_count !== undefined
                ? publicationResponse.results.votes_count
                : 0
            }
            url={
              publicationResponse?.results.reference_link !== undefined
                ? publicationResponse.results.reference_link
                : 'sin url'
            }
            photo={'/Vector.png'}
            id={
              publicationResponse?.results.id !== undefined
                ? publicationResponse.results.id
                : 'sin id'
            }
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
