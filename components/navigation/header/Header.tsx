import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IconLogo } from '../../assets/logo/IconLogo';
import { HeartHeader } from '../../assets/svg/HeartHeader';
import { UserLogo } from '../../assets/svg/UserLogo';

const Header = () => {
  const [isLogg, setIsLogg] = useState();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [singout, setSingout] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const dataUser = localStorage.getItem('user');
    const data = dataUser ? JSON.parse(dataUser) : null;
    setIsLogg(data?.data.email);
    // console.log(data?.data.email);
    if (isOpen && true) {
      setSingout(false);
    }
  }, [isOpen]);

  const handleClic = () => {
    setSingout(true);
    localStorage.clear();
  };

  const router = useRouter();

  const handleClicPublication = () => {
    router.push('/publications');
  };

  const handleClickLogo = () => {
    router.push('/');
  };

  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <h2 className="cursor-pointer" onClick={handleClickLogo}>
        <IconLogo />
      </h2>
      <div>
        {isLogg && true && !singout ? (
          <ul className="flex items-center justify-between  sm:px-12 py-4">
            <li
              onClick={handleClicPublication}
              className="px-4 text-app-blue flex items-center justify-center cursor-pointer"
            >
              <span className="w-16px font-light text-[35px] px-1">+</span>
              Crear Publicación
            </li>
            <li className="px-4 flex gap-2">
              <HeartHeader />
              <Link href="/profile">Mis Votos</Link>
            </li>
            <li className="px-4 flex gap-2">
              <div className="rounded-full aspect-square w-[25px] justify-center border-2 border-white flex ">
                <UserLogo />
              </div>
              <Link href="/profile">{isLogg}</Link>
            </li>
            <div className="relative">
              <button
                className=" hover:bg-app-blackLight text-app-grayLighter rounded inline-flex items-center"
                onClick={toggleMenu}
              >
                <svg
                  className="fill-current h-8 w-8 "
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9l4 4 4-4"></path>
                </svg>
              </button>
              {isOpen && (
                <div className="z-10 dropdown-menu p-4 absolute bg-gray-100 rounded-2xl shadow-lg -bottom-30 -left-[160px] w-[182px] h-[180]px">
                  <div>
                    <Link
                      className="flex px-4 py-2 text-gray-800 hover:bg-gray-200"
                      href="/profile/config"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.777778 7.77778H5.44444C5.65072 7.77778 5.84855 7.69583 5.99442 7.54997C6.14028 7.40411 6.22222 7.20628 6.22222 7V0.777778C6.22222 0.571498 6.14028 0.373667 5.99442 0.227806C5.84855 0.0819442 5.65072 0 5.44444 0H0.777778C0.571498 0 0.373667 0.0819442 0.227806 0.227806C0.0819442 0.373667 0 0.571498 0 0.777778V7C0 7.20628 0.0819442 7.40411 0.227806 7.54997C0.373667 7.69583 0.571498 7.77778 0.777778 7.77778ZM0 13.2222C0 13.4285 0.0819442 13.6263 0.227806 13.7722C0.373667 13.9181 0.571498 14 0.777778 14H5.44444C5.65072 14 5.84855 13.9181 5.99442 13.7722C6.14028 13.6263 6.22222 13.4285 6.22222 13.2222V10.1111C6.22222 9.90483 6.14028 9.707 5.99442 9.56114C5.84855 9.41528 5.65072 9.33333 5.44444 9.33333H0.777778C0.571498 9.33333 0.373667 9.41528 0.227806 9.56114C0.0819442 9.707 0 9.90483 0 10.1111V13.2222ZM7.77778 13.2222C7.77778 13.4285 7.85972 13.6263 8.00558 13.7722C8.15145 13.9181 8.34928 14 8.55556 14H13.2222C13.4285 14 13.6263 13.9181 13.7722 13.7722C13.9181 13.6263 14 13.4285 14 13.2222V7.77778C14 7.5715 13.9181 7.37367 13.7722 7.22781C13.6263 7.08194 13.4285 7 13.2222 7H8.55556C8.34928 7 8.15145 7.08194 8.00558 7.22781C7.85972 7.37367 7.77778 7.5715 7.77778 7.77778V13.2222ZM8.55556 5.44444H13.2222C13.4285 5.44444 13.6263 5.3625 13.7722 5.21664C13.9181 5.07078 14 4.87295 14 4.66667V0.777778C14 0.571498 13.9181 0.373667 13.7722 0.227806C13.6263 0.0819442 13.4285 0 13.2222 0H8.55556C8.34928 0 8.15145 0.0819442 8.00558 0.227806C7.85972 0.373667 7.77778 0.571498 7.77778 0.777778V4.66667C7.77778 4.87295 7.85972 5.07078 8.00558 5.21664C8.15145 5.3625 8.34928 5.44444 8.55556 5.44444Z"
                          fill="#1A1E2E"
                        />
                      </svg>
                      <p className="pl-3">Configuración</p>
                    </Link>

                    <button
                      onClick={handleClic}
                      className="flex  px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      <svg
                        width="17"
                        height="19"
                        viewBox="0 0 17 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 10.2308C17 11.4183 16.775 12.5525 16.3249 13.6334C15.8748 14.7143 15.2697 15.6468 14.5098 16.4309C13.7498 17.2149 12.8459 17.8391 11.7982 18.3035C10.7504 18.7678 9.65104 19 8.5 19C7.34896 19 6.24957 18.7678 5.20182 18.3035C4.15408 17.8391 3.25022 17.2149 2.49023 16.4309C1.73025 15.6468 1.12522 14.7143 0.67513 13.6334C0.225043 12.5525 0 11.4183 0 10.2308C0 8.84535 0.296983 7.53986 0.890951 6.3143C1.48492 5.08874 2.32053 4.0611 3.39779 3.23137C3.71506 2.98778 4.06738 2.89263 4.45475 2.94591C4.84212 2.9992 5.15017 3.1895 5.37891 3.51683C5.61502 3.83654 5.7054 4.19621 5.65006 4.59585C5.59473 4.99549 5.41211 5.31711 5.10221 5.5607C4.37912 6.124 3.8202 6.8129 3.42546 7.6274C3.03071 8.44191 2.83333 9.3097 2.83333 10.2308C2.83333 11.0224 2.98275 11.7779 3.28158 12.4973C3.5804 13.2166 3.98438 13.8389 4.49349 14.3642C5.0026 14.8894 5.60579 15.3062 6.30306 15.6145C7.00033 15.9228 7.73264 16.0769 8.5 16.0769C9.26736 16.0769 9.99967 15.9228 10.6969 15.6145C11.3942 15.3062 11.9974 14.8894 12.5065 14.3642C13.0156 13.8389 13.4196 13.2166 13.7184 12.4973C14.0173 11.7779 14.1667 11.0224 14.1667 10.2308C14.1667 9.3097 13.9693 8.44191 13.5745 7.6274C13.1798 6.8129 12.6209 6.124 11.8978 5.5607C11.5879 5.31711 11.4053 4.99549 11.3499 4.59585C11.2946 4.19621 11.385 3.83654 11.6211 3.51683C11.8498 3.1895 12.1597 2.9992 12.5508 2.94591C12.9418 2.89263 13.2923 2.98778 13.6022 3.23137C14.6795 4.0611 15.5151 5.08874 16.109 6.3143C16.703 7.53986 17 8.84535 17 10.2308ZM9.91667 1.46154V8.76923C9.91667 9.16506 9.77647 9.50761 9.49609 9.79688C9.21571 10.0861 8.88368 10.2308 8.5 10.2308C8.11632 10.2308 7.78429 10.0861 7.50391 9.79688C7.22352 9.50761 7.08333 9.16506 7.08333 8.76923V1.46154C7.08333 1.06571 7.22352 0.723157 7.50391 0.433894C7.78429 0.144631 8.11632 0 8.5 0C8.88368 0 9.21571 0.144631 9.49609 0.433894C9.77647 0.723157 9.91667 1.06571 9.91667 1.46154Z"
                          fill="#1A1E2E"
                        />
                      </svg>

                      <p className="pl-3">Cerrar sesión</p>
                    </button>
                    <Link
                      className="flex px-4 py-2 border-t-2 border-app-gray text-gray-800 hover:bg-gray-200"
                      href="/"
                    >
                      <p className="pl-3">Ayuda y soporte</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </ul>
        ) : (
          <ul className="flex items-center justify-between  sm:px-12 py-4">
            <li className="px-4 text-app-blue flex items-center justify-center">
              <span className="w-16px font-light text-[35px] px-1">+</span>
              Crear Publicación
            </li>
            <li className="px-4">
              <Link href="login">Log In</Link>
            </li>
            <li className="px-4">
              <Link href="sign-up">Sign Up</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
