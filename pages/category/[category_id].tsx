import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { categories } from '../../lib/data/categories';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;
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

      <div className="shadow-md">
        <div className=" mt-[120px] justify-between flex gap-2 app-container">
          <div className="flex gap-2  ">
            {categories.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="p-4 rounded-3xl  border-2 border-grayLighter"
                  href={`/category${item.url}`}
                >
                  <button>{item.name}</button>
                </Link>
              );
            })}
          </div>

          <input
            className="px-6 py-4 border-2 border-grayLighter rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
        </div>
        <div className="bg-while ">
          <EventSlider
            title="Populares en Querétaro"
            subtitle="Lo que las personas piden más"
            events={eventsMock}
          />
        </div>
      </div>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
