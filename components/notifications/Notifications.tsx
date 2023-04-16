// import { useRouter } from 'next/navigation';

const VoteNotification = () => {
  // const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-4">Todos votamos</div>
        <div>
          <div className="mb-4">
            Todos los votos son importantes aquí. Para validar el tuyo debes
            tener una cuenta.
          </div>
        </div>
        <div className="flex justify-between">
          <button
            // onClick={() => router.push('/sign-up')}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear cuenta
          </button>
          <button
            // onClick={() => router.push('/login')}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Iniciar sesión
          </button>
        </div>
        <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VoteNotification;
