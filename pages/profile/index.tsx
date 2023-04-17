import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '../../components/navigation/header/Header';
import { CardEvent } from '../../components/sliders/EventSlider/CardEvent';
import { myPublications } from '../../lib/services/mypublications.services';
import { meUser } from '../../lib/services/user.services';

export default function ProfilePage() {
  const sameVotes = [
    { first_name: 'string', id: 'string', last_name: 'string' },
  ];
  const { data: infoPerfil, error, isLoading, mutate } = meUser();
  const [stateVotos, setStatevotos] = useState<boolean>(true);
  const [statecurrentPage, setStatecurrentPage] = useState<number>(1);
  const [query, setQuery] = useState({
    pages: 1,
    parametro: 'votes',
  });
  const [params, setParams] = useState('');
  const imagePerfil = infoPerfil?.image_url;
  const myid = infoPerfil?.id;
  console.log(myid);
  console.log(infoPerfil);
  console.log(params);
  const { data: myPublication } = myPublications(params);

  const publications = myPublication?.results;
  let totalPage = 0;
  let currentPage = 0;
  if (myPublication) {
    totalPage = myPublication?.totalPages;
    currentPage = myPublication?.currentPage;
  }

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPage, currentPage + 2);
  let suspensive = true;
  if (currentPage < totalPage - 3) {
    suspensive = true;
  } else {
    suspensive = false;
  }
  const pages = [];

  if (totalPage) {
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  }
  const handelClickPublications = () => {
    setStatevotos(false);
    setStatecurrentPage(1);
    setQuery({ ...query, parametro: 'publications' });
  };
  const handelClickVotes = () => {
    setStatevotos(true);
    setStatecurrentPage(1);
    setQuery({ ...query, parametro: 'votes' });
  };
  useEffect(() => {
    setParams(`/users/${myid}/${query.parametro}?page=${query.pages}`);
  }, [query]);
  const onChangePage = (page: number) => {
    setStatecurrentPage(page);
    setQuery({ ...query, pages: page });
  };

  return (
    <div>
      <Header />
      <div className="h-[129px] flex items-center justify-center bg-app-blue text-white title-6">
        <div className="relative top-[65px]">
          {imagePerfil && true ? (
            <div
              style={{
                backgroundImage: `url(${imagePerfil})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '120px',
                height: '120px',
                borderRadius: '60px',
              }}
              className="flex items-center  justify-center max-w-xs gap-2 "
            ></div>
          ) : (
            <Image
              className="  w-[117px] md:w-full "
              src={imagePerfil && true ? URL[imagePerfil] : '/photoProfile.png'}
              alt="evetn"
              width={600}
              height={600}
            />
          )}
        </div>
      </div>
      <div className="flex pt-20 items-center justify-center gap-5">
        <button
          style={
            stateVotos == true
              ? { borderColor: 'blue', color: 'blue' }
              : { borderColor: 'gray' }
          }
          onClick={handelClickVotes}
          className="rounded-3xl border-2 border-app-gray text-app-gray subtitle-5  w-[137px] p-2"
        >
          Mis votos
        </button>
        <button
          style={
            stateVotos == false
              ? { borderColor: 'blue', color: 'blue' }
              : { borderColor: 'gray' }
          }
          onClick={handelClickPublications}
          className="rounded-3xl border-2 border-app-gray text-app-gray subtitle-5  w-[137px] p-2"
        >
          Mis publicaciones
        </button>
      </div>
      <div className="flex items-center justify-center gap-4 p-10 flex-wrap">
        {publications?.map((publication, index) => (
          <div className="relative" key={index}>
            <CardEvent
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
              same_vote={sameVotes}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="px-4 py-2 bg-app-grayLighter"></button>
        {currentPage > 3 ? (
          <>
            <button
              className="px-4 py-2 focus:bg-app-gray"
              style={1 === statecurrentPage ? { backgroundColor: 'gray' } : {}}
              onClick={() => onChangePage(1)}
            >
              {1}
            </button>
            <span>...</span>
          </>
        ) : (
          ''
        )}
        {pages.map((page) => (
          <button
            key={page}
            className="px-4 py-2 focus:bg-app-gray"
            style={page === statecurrentPage ? { backgroundColor: 'gray' } : {}}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        ))}
        {suspensive == true ? (
          <>
            <p>...</p>{' '}
            <button
              className="px-4 py-2 focus:bg-app-gray"
              style={
                totalPage === statecurrentPage
                  ? { backgroundColor: 'gray' }
                  : {}
              }
              onClick={() => onChangePage(totalPage)}
            >
              {totalPage}
            </button>
            <button className="px-4 py-2 bg-app-grayLighter"></button>
          </>
        ) : (
          ''
        )}
        <button className="px-4 py-2 bg-app-grayLighter"></button>
      </div>
      <div className='mt-[50px] min-h-[182px] flex justify-center items-center flex-col bg-[url("/footer-banner.png")] bg-cover bg-no-repeat bg-center '></div>
    </div>
  );
}
