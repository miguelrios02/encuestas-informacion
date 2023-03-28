import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
};
export default function SingUpPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
    },
  });

  const router = useRouter();
  const [logg, setLogg] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    localStorage.setItem('data', JSON.stringify({ data }));
    setLogg(true);
    router.push('/');
    console.log(`usuario creado ${logg}`);

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div
      className='bg-[url("/login-banner.png")] bg-cover bg-center  grid align-center justify-center 
     md:grid-cols-2  h-screen'
    >
      <div className="flex items-center justify-center  ">
        <Link href={'/'}>
          <Image
            className="w-20 md:w-full"
            src="/LOGO2.png"
            alt="evetn"
            width={600}
            height={600}
          />
        </Link>
      </div>
      <div className="flex items-center justify-center ">
        <div className="relative md:mt-20 text-app-grayLighter rounded-3xl text-left flex flex-col w-[378px] lg:w-[557px] h-[571px] app-card bg-app-gradient p-11 border border-grayLighter">
          <div>
            <h1 className="title-4 app-grayLighter">Todos votamos :)</h1>
            <p className="title5 pt-3">Registrate, valida tu voto.</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col texto-3 gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Email</span>
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                type="text"
                {...register('email')}
              />
            </label>

            <div className="grid grid-cols-2 gap-2">
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Nombre</span>
                <input
                  className="p-4 rounded-lg border-2 border-grayLighter bg-transparent"
                  type="text"
                  {...register('firstName')}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Apellido</span>
                <input
                  className="p-4 rounded-lg border border-grayLighter bg-transparent"
                  type="text"
                  {...register('lastName')}
                />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="font-semibold">Contraseña</span>
              <input
                className="p-4 rounded-lg border border-grayLighter bg-transparent"
                type="password"
                {...register('password')}
              />
            </label>
            <li className="text-left subtitle-3 pt-2">
              La contraseña debe tener números, minúsculas y mayúsculas.
            </li>
            <button className="rounded-lg bg-app-yellow text-app-black h-[45px]">
              Crear cuenta
            </button>

            <Link href={'/login'}>
              <p className="text-app-yellow text-center underline">
                O iniciar sesíon
              </p>
            </Link>
          </form>
          <div className="absolute top-5 right-5 lg:right-0 lg:-top-11">
            <Link href={'/'}>
              <Image
                className="object-cover  w-full rounded-t-lg"
                src="/X.png"
                alt="evetn"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
