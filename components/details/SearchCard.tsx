import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IEvent } from '../../lib/interfaces/event.interface';
import { votePublications } from '../../lib/services/votes.services';
import { Heart } from '../assets/svg/Heart';

export const SearchCard: React.FC<IEvent> = ({
  title,
  short_description,
  votes,
  image,
  url,
  photo,
  id,
}) => {
  const [isactive, setIsActive] = useState<boolean>(false);

  const handleclic = (): void => {
    setIsActive(!isactive);
    votePublications(id);
  };
  return (
    <div className="relative shadow  rounded-2xl  h-[239px] mb-7">
      <Link href={`/detail/${id}`} className="flex ">
        <Image
          className="object-cover h-[239px]  md:w-[299px] sm:w-[200px]   w-[121px] rounded-2xl"
          src={image}
          alt="evetn"
          width={299}
          height={239}
        />
        <div className="relative">
          <section className="sm:pr-[90px] px-6">
            <h2 className="title-3  pt-[34px] pb-[5px]">{title}</h2>
            <p className="subtitle-6 bg-gradient-to-b bg-clip-text text-transparent from-app-black to-while">
              {short_description}
            </p>
          </section>
          <div className="absolute  bottom-4  pl-6 left-0 ">
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
        </div>
      </Link>
      <Heart
        onClick={handleclic}
        className="absolute top-[15px] right-[15px] cursor-pointer"
        isActive={isactive}
      />
    </div>
  );
};
