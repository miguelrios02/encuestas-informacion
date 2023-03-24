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
    <div className=" shadow add-card rounded-lg min-h-[454px]">
      <Image
        className="object-cover w-full h-48 rounded-lg"
        src={image}
        alt="evetn"
        width={299}
        height={239}
      />
      <section className="px-6">
        <div>
          <h2 className="title-3  pt-[15px] pb-[5px]">{title}</h2>
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-app-black to-while">
            {short_description}
          </p>
        </div>
        <div className="absolute bottom-10 pb-[12px]">
          <p className="text-app-blue texto-2 pt-[12px] ">{url}</p>
          <p>{votes} Votos</p>
        </div>
      </section>
    </div>
  );
};
