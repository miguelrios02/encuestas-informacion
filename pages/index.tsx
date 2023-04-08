import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import Interest from '../components/interests/Interest';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { categories } from '../lib/data/categories';
import { usePublications } from '../lib/services/publications.services';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const {
    data: publicationResponse,
    error,
    isLoading,
    mutate,
  } = usePublications();
  const publications = publicationResponse?.results;
  console.log(publications);
  //const { data, error, isLoading } = useCategories();

  //console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center max-w-[465px]">
            <input
              className="px-6 py-4 h-[46px] border-2 border-grayLighter rounded-3xl w-full "
              type="text"
              placeholder="¿Qué quieres ver en tu ciudad?"
            />

            <span className="absolute right-0 top-4">
              <Link href={'/search'}>
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
              </Link>
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            {categories.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="px-3 rounded-3xl bg-white text-[#A7A6A7] p-1"
                  href={`/category${item.url}`}
                >
                  <button>{item.name}</button>
                </Link>
              );
            })}
            {/* <Link
              className="px-3 rounded-3xl bg-white text-[#A7A6A7]"
              href={'/category/marcas-y-tiendas'}
            >
              <button>Marcas y tiendas</button>
            </Link>
            <Link
              className="px-3 rounded-3xl bg-white text-[#A7A6A7]"
              href={'/category/artistas-y-conciertos'}
            >
              <button>Artistas y conciertos</button>
            </Link>
            <Link
              className="px-3 rounded-3xl bg-white text-[#A7A6A7]"
              href={'/category/torneos'}
            >
              <button>Torneos</button>
            </Link> */}
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="bg-while ">
        <EventSlider
          title="Populares en Querétaro"
          subtitle="Lo que las personas piden más"
          events={publications}
        />
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

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
