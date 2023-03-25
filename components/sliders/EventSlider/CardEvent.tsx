import Image from 'next/image';
import { useState } from 'react';
import { IEvent } from '../../../lib/interfaces/event.interface';
import { Heart } from '../../assets/svg/Heart';

export const CardEvent: React.FC<IEvent> = ({
  title,
  short_description,
  votes,
  image,
  url,
  photo,
}) => {
  const [isactive, setIsActive] = useState<boolean>(false);
  const handleclic = (): void => {
    setIsActive(!isactive);
  };
  return (
    <div className=" shadow add-card rounded-lg  w-[299px] min-h-[454px] mb-7">
      <Image
        className="object-cover h-[239px] w-full rounded-t-lg"
        src={image}
        alt="evetn"
        width={299}
        height={239}
      />
      <section className="px-6 relative ">
        <div>
          <h2 className="title-3  pt-[15px] pb-[5px]">{title}</h2>
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-app-black to-while">
            {short_description}
          </p>
        </div>
      </section>
      <div className="absolute bottom-10 pl-6 left-0 ">
        <p className="text-app-blue texto-2 pt-[12px] pb-3 ">{url}</p>
        <div className="flex">
          <Image
            className="object-cover w-6 h-6  "
            src={photo}
            alt="evetn"
            width={50}
            height={50}
          />
          <p className="pl-2">{votes} Votos</p>
        </div>
      </div>
      <Heart
        onClick={handleclic}
        className="absolute top-[205px] left-[230px] cursor-pointer"
        isActive={isactive}
      />
    </div>
  );
};
