import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Interest from '../../components/interests/Interest';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
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
      <div className="relative z-10 app-container mt-2">
        <p className="text-white texto-2">Home /{publicationtype?.name}</p>
        <p className="title-6 text-app-yellow mt-4 mb-4">
          {publicationtype?.name}
        </p>
        <p className="texto-2 text-white ">
          Descubre lo que la gente quiere cerca
        </p>
      </div>
      <div className="mt-[100px]">
        <div className=" shadow-md  ">
          <div className="app-container justify-between flex gap-2 flex-wrap">
            <div className="flex gap-2   ">
              {categories
                ? categories.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        className="flex items-center rounded-3xl h-[46px] border-2 border-grayLighter"
                        href={`/category/${item.id}`}
                      >
                        <button className="p-2">{item.name}</button>
                      </Link>
                    );
                  })
                : []}
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative flex items-center min-w-[300px]"
            >
              <input
                className="px-6 py-4 h-[46px] border-2 border-grayLighter rounded-3xl w-full "
                type="text"
                placeholder="¿Qué quieres ver en tu ciudad?"
                {...register('searcher')}
              />

              <span className="absolute right-0 top-4">
                <button className="px-8">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0"
                  >
                    <path
                      d="M13.1988 11.6083H12.3648L12.0691 11.3234C12.7289 10.5574 13.2112 9.65499 13.4813 8.6809C13.7514 7.70682 13.8028 6.6851 13.6317 5.68886C13.1355 2.7555 10.6861 0.413034 7.72986 0.0542773C6.69056 -0.0771269 5.63496 0.0308227 4.64383 0.369866C3.6527 0.708909 2.75231 1.27006 2.01156 2.01038C1.2708 2.75069 0.709324 3.65056 0.370083 4.64111C0.0308408 5.63166 -0.0771721 6.68664 0.0543092 7.72533C0.413276 10.6798 2.75712 13.1278 5.6922 13.6237C6.68902 13.7947 7.71134 13.7434 8.68599 13.4734C9.66065 13.2034 10.5636 12.7215 11.3301 12.0621L11.6151 12.3575V13.1911L16.1022 17.6755C16.5351 18.1082 17.2425 18.1082 17.6753 17.6755C18.1082 17.2429 18.1082 16.536 17.6753 16.1033L13.1988 11.6083ZM6.86412 11.6083C4.23521 11.6083 2.11309 9.48745 2.11309 6.86009C2.11309 4.23273 4.23521 2.11185 6.86412 2.11185C9.49302 2.11185 11.6151 4.23273 11.6151 6.86009C11.6151 9.48745 9.49302 11.6083 6.86412 11.6083Z"
                      fill="#6E6A6C"
                    />
                  </svg>
                </button>
              </span>
            </form>
          </div>
        </div>
        <div className="bg-while ">
          <EventSlider
            title="Populares en Querétaro"
            subtitle="Lo que las personas piden más"
            events={publicationCategory}
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
