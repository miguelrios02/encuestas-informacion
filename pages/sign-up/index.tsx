import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from '../../lib/helpers/axios.helper';

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
export default function SingUpPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
  });

  const [singupError, setSingupError] = useState(false);

  const router = useRouter();
  const [logg, setLogg] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    axios
      .post('/auth/sign-up', data)
      .then((res) => {
        console.log(res);
        console.log(data);
        localStorage.setItem('data', JSON.stringify({ data }));
        setLogg(true);
        router.push('/login');
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Bienvenido! Ahora puedes iniciar sesión',
          confirmButtonText: 'Ok',
        });
      })
      .catch((err) => {
        setSingupError(true);
        console.log(singupError);
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error durante el registro. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Ok',
        });
      });

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  console.log(logg);
  console.log(singupError);

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
                  {...register('first_name')}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Apellido</span>
                <input
                  className="p-4 rounded-lg border border-grayLighter bg-transparent"
                  type="text"
                  {...register('last_name')}
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
