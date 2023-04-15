import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IEvent } from '../../../lib/interfaces/event.interface';
import { usePublications } from '../../../lib/services/publications.services';
import { votePublications } from '../../../lib/services/votes.services';
import { Heart } from '../../assets/svg/Heart';

export const CardEvent: React.FC<IEvent> = ({
  title,
  short_description,
  votes,
  image,
  url,
  photo,
  id,
  same_vote,
}) => {
  const [isactive, setIsActive] = useState<boolean>(false);
  const { mutate: mutatePublication } = usePublications();

  const isVoted = () => {
    if (same_vote?.length > 0) {
      setIsActive(true);
    }
  };
  useEffect(() => {
    isVoted();
  }, []);

  const handleclic = (): void => {
    setIsActive(!isactive);
    votePublications(id).then((res) => {
      mutatePublication();
      console.log(res);
    });
  };
  return (
    <div className=" shadow add-card rounded-lg  w-[299px] min-h-[454px] mb-7">
      <Link href={`/detail/${id}`}>
        <Image
          className="object-cover h-[239px] w-full rounded-t-lg"
          src={image}
          alt="evetn"
          width={299}
          height={239}
        />
        <section className="px-6 relative md:pr-6">
          <h2 className="title-3  pt-[15px] pb-[5px]">{title}</h2>
          <p className="subtitle-6 bg-gradient-to-b bg-clip-text text-transparent from-app-black to-while">
            {short_description}
          </p>
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
      </Link>

      <Heart
        onClick={handleclic}
        className="absolute top-[205px] left-[230px] cursor-pointer"
        isActive={isactive}
      />
    </div>
  );
};
