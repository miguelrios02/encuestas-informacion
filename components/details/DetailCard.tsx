import Image from 'next/image';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { IEvent } from '../../lib/interfaces/event.interface';
import { votePublications } from '../../lib/services/votes.services';
import VoteNotification from '../notifications/Notifications';

export const DetailCard: React.FC<IEvent> = ({
  title,
  short_description,
  votes,
  image,
  url,
  photo,
  same_vote,
  id,
}) => {
  const [isactive, setIsActive] = useState<boolean>(false);

  const MySwal = withReactContent(Swal);
  const votingNotification = <VoteNotification />;

  const handleclic = (): void => {
    votePublications(id)
      .then((res) => {
        setIsActive(!isactive);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          html: votingNotification,
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: true,
          showCloseButton: true,
        });
      });
  };

  const isVoted = () => {
    if (same_vote.length > 0) {
      setIsActive(true);
    }
  };
  useEffect(() => {
    isVoted();
  }, []);
  return (
    <div className="mb-7 app-container grid  md:grid-cols-2 ">
      <div>
        <p className="subtitle-1 ">Artista/ Pop/ Rock</p>
        <h2 className="title-7   pt-[15px] pb-[20px]">{title}</h2>
        <p className="bg-clip-text pb-[33px]  ">{short_description}</p>
        <div className=" ">
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
      <div className="pt-[25px] ">
        <Image
          className="object-cover md:w-[539px] md:h-[381px]"
          src={image}
          alt="evetn"
          width={374}
          height={252}
        />
      </div>
      <section className="pt-[31px] relative md:-top-[80px]">
        {same_vote.length > 0 ? (
          <button
            onClick={handleclic}
            className="h-[46px] text-app-grayLighter subtitle-1  bg-app-blue rounded-3xl w-[374px]"
          >
            Quitar voto
          </button>
        ) : (
          <button
            onClick={handleclic}
            className="h-[46px] text-app-grayLighter subtitle-1  bg-app-blue rounded-3xl w-[374px]"
          >
            Votar
          </button>
        )}
      </section>
    </div>
  );
};
