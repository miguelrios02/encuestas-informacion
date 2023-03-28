import Link from 'next/link';
import { categories } from '../../../lib/data/categories';
const Searcher = () => {
  return (
    <div className=" shadow-md  ">
      <div className="app-container justify-between flex gap-2 flex-wrap">
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
    </div>
  );
};

export default Searcher;
