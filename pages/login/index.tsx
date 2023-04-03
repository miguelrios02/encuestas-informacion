import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../lib/helpers/axios.helper';

type FormValues = {
  email: string;
  password: string;
};
export default function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();
  const [loginError, setLoginError] = useState(false);

  const onSubmit = async (data: FormValues) => {
    axios
      .post('/auth/login', data)
      .then((res) => {
        console.log(res);
        console.log(data);
        // hacer algo cuando el login sea exitoso, por ejemplo, guardar el token en el local storage y redirigir al usuario a la página principal
        router.push('/');
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
        console.log(loginError);
      });
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
      <div className="flex items-center justify-center  ">
        <div className="relative md:mt-20 text-app-grayLighter rounded-3xl  flex flex-col w-[378px] lg:w-[557px] h-[529px] app-card bg-app-gradient p-11 border border-grayLighter">
          <div>
            <h1 className="title-4 app-grayLighter pt-5">!Hola¡</h1>
            <p className="title5 pt-6 pb-5">
              Inicie sesión con los datos que ingresó durante su registro
            </p>
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
                placeholder="ejemplo@gmail.com"
                {...register('email')}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold">Contraseña</span>
              <input
                className="p-4 rounded-lg border border-grayLighter bg-transparent"
                type="password"
                {...register('password')}
              />
            </label>
            <div className="flex subtitle-3 align-center justify-center pt-2">
              <p className="text-center  ">¿Olvidaste tu contraseña?</p>
              <Link href={'/password-recovery'}>
                <p className="text-app-yellow underline text-center ">
                  Recuperala aquí
                </p>
              </Link>
            </div>
            <button className="rounded-lg bg-app-yellow text-app-black h-[45px]">
              Iniciar sesión
            </button>

            <Link href={'/sign-up'}>
              <p className="text-app-yellow text-center underline">
                O crea una cuenta nueva
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
