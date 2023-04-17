import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SearchCard } from '../../components/details/SearchCard';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import {
  Publications,
  usePublications,
} from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';

type FormValues = {
  searcher: any;
};

export const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const { search_id } = router.query;
  console.log(search_id);
  const [query, setQuery] = useState({
    pages: 1,
    tagPositions: '',
    titles: '',
  });
  const [params, setParams] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tagPosition, setTagPosition] = useState<string>('');
  const [titlequery, setTitlequery] = useState<any>();
  const [statecurrentPage, setStatecurrentPage] = useState<number>(1);
  let searchId;
  if (search_id === '') {
    searchId == '';
  } else {
    searchId == search_id;
  }
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      searcher: searchId,
    },
  });
  const handleClick = (tag: string) => {
    setTagPosition(tag);
    setQuery({ ...query, tagPositions: tag, pages: 1 });
    setStatecurrentPage(1);
  };
  const onSubmit = async (data: FormValues) => {
    if (data.searcher == '') {
      router.push(`/search/""`);
    } else {
      router.push(`/search/${data.searcher}`);
    }
  };
  const onChangePage = (page: number) => {
    setStatecurrentPage(page);
    setQuery({ ...query, pages: page });
  };

  const {
    data: publicationResponse,
    error,
    isLoading,
    mutate,
  } = Publications(params); // params
  const { data: allpublicationResponse } = usePublications();
  const publications = publicationResponse?.results;
  const totalPage = publicationResponse?.totalPages;
  const allpublications = allpublicationResponse?.results;

  useEffect(() => {
    if (search_id == '""') {
      setParams(
        `?page=${query.pages}&title=${query.titles}&tags=${query.tagPositions}`
      );
    } else {
      setTitlequery(search_id);

      setParams(
        `?page=${query.pages}&title=${search_id}&tags=${query.tagPositions}`
      );
    }
  }, [query, search_id]);

  const pages = [];
  if (totalPage) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen);
  console.log(publicationResponse);

  return (
    <div>
      <div className="mt-[20px]">
        <div className=" shadow-md  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="app-container flex gap-4"
          >
            <div className="relative flex items-center w-[561px]">
              <input
                className="px-6 py-4 h-[46px] border-2 border-grayLighter rounded-3xl w-full "
                type="text"
                placeholder="¿Qué quieres ver en tu ciudad?"
                {...register('searcher')}
              />
              <span className="absolute right-0 top-4">
                <button className="px-8" type="submit">
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
            </div>
            <button className="rounded-3xl bg-app-blue subtitle-1 text-app-grayLighter h-[47px] w-[124px]">
              Buscar
            </button>
          </form>
          <div className=" relative m-auto container pt-4 pr-4 pl-4  lg:max-w-6xl flex gap-6 subtitle-2 text-app-grayDark">
            <button
              style={
                tagPosition === ''
                  ? { borderBottom: '4px solid black', borderColor: '#1b4db1' }
                  : { borderBottom: '0px solid black' }
              }
              onClick={() => handleClick('')}
            >
              Todos los resultado
            </button>
            <button
              style={
                tagPosition === '1'
                  ? { borderBottom: '4px solid black', borderColor: '#1b4db1' }
                  : { borderBottom: '0px solid black' }
              }
              onClick={() => handleClick('1')}
            >
              Marcas y tiendas
            </button>
            <button
              style={
                tagPosition === '2'
                  ? { borderBottom: '4px solid black', borderColor: '#1b4db1' }
                  : { borderBottom: '0px solid black' }
              }
              onClick={() => handleClick('2')}
            >
              Artistas y conciertos
            </button>
            <button
              style={
                tagPosition === '3'
                  ? { borderBottom: '4px solid black', borderColor: '#1b4db1' }
                  : { borderBottom: '0px solid black' }
              }
              onClick={() => handleClick('3')}
            >
              Torneos
            </button>
            <button className="sm:hidden" onClick={toggleMenu}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 18C9.10457 18 10 17.1046 10 16C10 14.8954 9.10457 14 8 14C6.89543 14 6 14.8954 6 16C6 17.1046 6.89543 18 8 18Z"
                  fill="black"
                />
                <path
                  d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
                  fill="black"
                />
                <path
                  d="M24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z"
                  fill="black"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                onClick={toggleMenu}
                className=" sm:hidden flex flex-col items-start gap-4 z-10 p-4 absolute bg-gray-100  shadow-lg left-[160px] top-[50px]  "
              >
                <button className="focus:border-b-4 focus:border-app-blue">
                  Artistas y conciertos
                </button>
                <button className=" focus:border-b-4 focus:border-app-blue">
                  Torneos
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="bg-while app-container  ">
          {publications?.map((publication, index) => (
            <SearchCard
              key={index}
              title={publication.title}
              short_description={publication.description}
              image={
                publication.images.length > 0
                  ? publication.images[0].image_url
                  : '/withoutPhoto.PNG'
              }
              votes={publication.votes_count}
              url={publication.reference_link}
              photo={'/Vector.png'}
              id={publication.id}
              same_vote={publication.same_vote}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="px-4 py-2 bg-app-grayLighter"></button>
          {pages.map((page) => (
            <button
              key={page}
              className="px-4 py-2 focus:bg-app-gray"
              style={
                page === statecurrentPage ? { backgroundColor: 'gray' } : {}
              }
              onClick={() => onChangePage(page)}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-app-grayLighter"></button>
        </div>
      </div>
      <div className="bg-while ">
        <EventSlider
          title="Recientes"
          subtitle="Las personas ultimamente esta hablando de esto"
          events={allpublications}
        />
      </div>
    </div>
  );
};

Detail.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Detail;
