import Image from 'next/image';
import { IEvent } from '../../../lib/interfaces/event.interface';

export const CardEvent: React.FC<IEvent> = ({
  title,
  short_description,
  votes,
  image,
  url,
}) => {
  return (
    <div className="max-w-sm rounded-lg shadow-md app-card">
      <Image
        className="object-cover w-full h-48 rounded-lg"
        src={image}
        alt="evetn"
        width={200}
        height={200}
      />
      <section className="grid gap-2 grid-cols-2 grid-rows-4-min ml-3">
        <h2 className="row-start-1 my-auto col-span-2 text-app-blackLight font-semibold text-lg m-0 h-3/6 ml-3">
          {title}
        </h2>
        <div className="z-20 row-start-2 h-24 row-end-3 w-56 bg-gradient-to-t from-white col-start-1 col-span-3 m-auto ml-3"></div>
        <div className=" row-start-2 h-24 row-end-3 w-56 text-left text-app-gray text-sm col-start-1 col-span-3 m-auto ml-3 overflow-hidden">
          <p>{short_description}</p>
        </div>
        <div>
          <p>{url}</p>
          <p>{votes} Votos</p>
        </div>
      </section>
    </div>
  );
};
