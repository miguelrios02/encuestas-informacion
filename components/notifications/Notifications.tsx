// import { useRouter } from 'next/navigation';
import Link from 'next/link';

const VoteNotification = () => {
  // const router = useRouter();

  return (
    <div className=" flex justify-center items-center bg-transparent">
      <div className="relative md:mt-20 text-app-grayLighter rounded-3xl  flex flex-col w-[378px] h-[529px] app-card bg-app-gradient p-11 border border-grayLighter justify-center items-center">
        <div>
          <h1 className="title-4 app-grayLighter pt-5">Todos votamos :)</h1>
          <p className="title-5 pt-6 pb-5">
            Todos los votos son importantes aquí. Para validar el tuyo debes
            tener una cuenta.
          </p>
        </div>
        <div className="flex flex-col texto-3 gap-3 ">
          <div className="rounded-lg bg-app-yellow text-app-black h-[45px] ">
            <Link href="/sign-up/">
              <button className="min-w-[300px] h-[45px]">Crear cuenta</button>
            </Link>
          </div>
          <Link href={'/login/'}>
            <p className="text-app-yellow text-center underline">
              O iniciar sesíon
            </p>
          </Link>
        </div>
        <button className="absolute top-5 right-5  w-[30px]">
          <Link href={'/'}>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4342 9.10742L16.7776 14.764L11.121 9.10742L9.6626 10.5658L15.3193 16.2224L9.6626 21.8791L11.121 23.3374L16.7776 17.6808L22.4342 23.3374L23.8927 21.8791L18.236 16.2224L23.8927 10.5658L22.4342 9.10742Z"
                fill="#F3F243"
              />
              <path
                d="M27.4381 5.56195C24.5372 2.66099 20.6026 1.03125 16.5 1.03125C12.3975 1.03125 8.46291 2.66099 5.56195 5.56195C2.66099 8.46291 1.03125 12.3975 1.03125 16.5C1.03125 20.6026 2.66099 24.5372 5.56195 27.4381C8.46291 30.3391 12.3975 31.9688 16.5 31.9688C20.6026 31.9688 24.5372 30.3391 27.4381 27.4381C30.3391 24.5372 31.9688 20.6026 31.9688 16.5C31.9688 12.3975 30.3391 8.46291 27.4381 5.56195ZM16.5 29.9063C9.10784 29.9063 3.09378 23.8922 3.09378 16.5C3.09378 9.10784 9.10784 3.09378 16.5 3.09378C23.8922 3.09378 29.9063 9.10784 29.9063 16.5C29.9063 23.8922 23.8922 29.9063 16.5 29.9063Z"
                fill="#F3F243"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default VoteNotification;
