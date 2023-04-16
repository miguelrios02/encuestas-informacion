import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Interest from '../../components/interests/Interest';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';

import { useForm } from 'react-hook-form';
import { Searcher } from '../../components/navigation/searcher/Searcher';
import { typePublications } from '../../lib/services/createPublication.services';
import {
  Publications,
  usePublications,
} from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';
type FormValues = {
  searcher: string;
};
export const CategoryPage: NextPageWithLayout = () => {
  const {
    data: publicationResponse,
    error,
    isLoading,
    mutate,
  } = usePublications();
  const { data: publicationstype } = typePublications();
  const [query, setQuery] = useState<string>('');
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      searcher: '',
    },
  });
  const onSubmit = async (data: FormValues) => {
    console.log(data.searcher);
    if (data.searcher == '') {
      router.push(`/search/vacio`);
    } else {
      router.push(`/search/${data.searcher}`);
    }
  };

  const categories = publicationstype?.results;
  const publications = publicationResponse?.results;
  const router = useRouter();
  const { category_id } = router.query;
  console.log(category_id);

  const { data: publicationByCategory } = Publications(query);

  console.log(publicationByCategory);
  const publicationCategory = publicationByCategory?.results;
  const publicationtype = publicationByCategory?.results[0].publication_type;
  console.log(publicationtype?.name);
  console.log(publicationCategory);
  useEffect(() => {
    setQuery(`?publications_types_ids=${category_id}`);
    console.log(query);
  }, [category_id]);
  return (
    <div>
      <div
        className='bg-[url("/store.png")] bg-cover bg-center absolute top-[91px]
      w-screen h-[204px]'
      ></div>
      <div className="relative z-10 app-container mb-[50px]">
        <p className="text-white texto-2">Home /{publicationtype?.name}</p>
        <p className="title-6 text-app-yellow mt-4 mb-4">
          {publicationtype?.name}
        </p>
        <p className="texto-2 text-white ">
          Descubre lo que la gente quiere cerca
        </p>
      </div>
      <Searcher />
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
