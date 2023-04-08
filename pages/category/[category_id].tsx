import { useRouter } from 'next/router';
import Interest from '../../components/interests/Interest';
import { Layout } from '../../components/layout/Layout';
import Searcher from '../../components/navigation/searcher/Searcher';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';

import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  const {
    data: publicationResponse,
    error,
    isLoading,
    mutate,
  } = usePublications();
  const publications = publicationResponse?.results;
  const router = useRouter();
  const { category_id } = router.query;
  console.log(router);
  return (
    <div>
      <div
        className='bg-[url("/store.png")] bg-cover bg-center absolute top-[101px]
      w-screen h-[204px]'
      ></div>
      <div className="relative z-10 app-container">
        <p className="text-white texto-2 ">Home / Marcas</p>
        <p className="title-6 text-app-yellow">{category_id}</p>
        <p className="texto-2 text-white ">
          Descubre lo que la gente quiere cerca
        </p>
      </div>

      <div className="mt-[120px]">
        <Searcher />
        <div className="bg-while ">
          <EventSlider
            title="Populares en Querétaro"
            subtitle="Lo que las personas piden más"
            events={publications}
          />
        </div>
      </div>
      <div className="bg-while ">
        <EventSlider
          title="Sujerencias para ti"
          subtitle="Publicaciones que podías colaborar"
          events={publications}
        />
      </div>
      <Interest />
      <div className="bg-while ">
        <EventSlider
          title="Recientes"
          subtitle="Las personas ultimamente esta hablando de esto"
          events={publications}
        />
      </div>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
