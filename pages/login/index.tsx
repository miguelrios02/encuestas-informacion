import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { login } from '../../lib/services/auth.service';

type FormValues = {
  email: string;
  password: string;
};
export default function Login() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);

  const onSubmit = async (data: FormValues) => {
    login(data)
      .then((res) => {
        Cookies.set('token', res.data.token);
        // hacer algo cuando el login sea exitoso, por ejemplo, guardar el token en el local storage y redirigir al usuario a la página principal
        router.push('/');
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Bienvenido de vuelta',
          confirmButtonText: 'Ok',
        });
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
        console.log(loginError);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error durante el Login. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Ok',
        });
        reset();
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
    <div className='relative bg-[url("/bg-img.png")]  bg-cover bg-center  h-screen  '>
      <div
        className="absolute inset-0 bg-gradient-to-l from-transparent to-black grid align-center justify-center 
     md:grid-cols-2 "
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
              <p className="title-5 pt-6 pb-5">
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
              <label className="flex flex-col relative">
                <span className="font-semibold">Contraseña</span>
                <input
                  className="p-4 rounded-lg border border-grayLighter bg-transparent"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                />
                <section
                  className="absolute inset-y-0 right-0 top-4 pr-3 flex items-center   hover:cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <svg
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 3.98212C11.0768 3.98859 10.6567 4.05436 10.2525 4.17743C10.4395 4.49904 10.539 4.86216 10.5416 5.23212C10.5416 5.51938 10.4838 5.80384 10.3714 6.06924C10.2591 6.33464 10.0943 6.57578 9.8867 6.77891C9.67906 6.98204 9.43255 7.14317 9.16126 7.2531C8.88996 7.36304 8.59918 7.41962 8.30553 7.41962C7.92736 7.41705 7.55616 7.31968 7.22741 7.1368C6.96803 8.0168 6.99826 8.95433 7.31382 9.81659C7.62937 10.6788 8.21426 11.4221 8.98562 11.9411C9.75698 12.4601 10.6757 12.7286 11.6117 12.7084C12.5477 12.6882 13.4534 12.3805 14.2007 11.8287C14.9479 11.277 15.4988 10.5092 15.7752 9.63422C16.0516 8.7592 16.0396 7.82128 15.7409 6.95332C15.4421 6.08535 14.8718 5.33133 14.1107 4.79807C13.3495 4.26482 12.4362 3.97935 11.5 3.98212ZM22.861 7.7868C20.6956 3.6536 16.4086 0.857117 11.5 0.857117C6.59132 0.857117 2.30317 3.65555 0.138937 7.7872C0.0475921 7.96396 0 8.15925 0 8.35731C0 8.55538 0.0475921 8.75067 0.138937 8.92743C2.30437 13.0606 6.59132 15.8571 11.5 15.8571C16.4086 15.8571 20.6968 13.0587 22.861 8.92704C22.9524 8.75028 23 8.55499 23 8.35692C23 8.15886 22.9524 7.96357 22.861 7.7868ZM11.5 13.9821C7.56083 13.9821 3.94951 11.8337 1.9993 8.35712C3.94951 4.88055 7.56043 2.73212 11.5 2.73212C15.4395 2.73212 19.0504 4.88055 21.0007 8.35712C19.0508 11.8337 15.4395 13.9821 11.5 13.9821Z"
                        fill="#F8F7FA"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="26"
                      height="20"
                      viewBox="0 0 26 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.7564 18.3984L1.46265 0.13711C1.39602 0.085812 1.31953 0.0476363 1.23755 0.0247623C1.15558 0.00188827 1.06972 -0.00523615 0.984874 0.0037958C0.900034 0.0128277 0.817874 0.0378392 0.743086 0.0774021C0.668298 0.116965 0.602346 0.170304 0.548997 0.234375L0.142747 0.722266C0.0892719 0.786359 0.0494658 0.859961 0.0256059 0.938862C0.00174613 1.01776 -0.00569901 1.10041 0.00369654 1.18208C0.0130921 1.26375 0.0391439 1.34284 0.0803613 1.41482C0.121579 1.4868 0.177153 1.55026 0.243903 1.60156L24.5377 19.8629C24.6043 19.9142 24.6808 19.9524 24.7628 19.9752C24.8447 19.9981 24.9306 20.0052 25.0154 19.9962C25.1003 19.9872 25.1824 19.9622 25.2572 19.9226C25.332 19.883 25.398 19.8297 25.4513 19.7656L25.8576 19.2777C25.911 19.2136 25.9508 19.14 25.9747 19.0611C25.9986 18.9822 26.006 18.8996 25.9966 18.8179C25.9872 18.7362 25.9612 18.6572 25.9199 18.5852C25.8787 18.5132 25.8232 18.4497 25.7564 18.3984ZM12.0572 5.72148L17.5331 9.83789C17.4429 7.49648 15.4572 5.625 13.0002 5.625C12.6832 5.62557 12.3672 5.65791 12.0572 5.72148ZM13.9431 14.2789L8.46721 10.1625C8.55781 12.5035 10.5436 14.375 13.0002 14.375C13.3171 14.3743 13.633 14.3421 13.9431 14.2789ZM13.0002 4.375C17.0078 4.375 20.6819 6.52344 22.6661 10C22.1797 10.8556 21.5787 11.6462 20.8786 12.3516L22.4117 13.5039C23.2654 12.6259 23.9886 11.6385 24.5608 10.5699C24.6537 10.3932 24.7022 10.1979 24.7022 9.9998C24.7022 9.80174 24.6537 9.60645 24.5608 9.42969C22.3557 5.29648 17.9942 2.5 13.0002 2.5C11.5092 2.5 10.0869 2.77344 8.74956 3.23477L10.635 4.65234C11.4044 4.48438 12.1925 4.375 13.0002 4.375ZM13.0002 15.625C8.9925 15.625 5.31878 13.4766 3.33425 10C3.82125 9.1444 4.4229 8.35393 5.12378 7.64883L3.59059 6.49648C2.73712 7.37441 2.01405 8.36163 1.44193 9.43008C1.349 9.60684 1.30058 9.80213 1.30058 10.0002C1.30058 10.1983 1.349 10.3936 1.44193 10.5703C3.64503 14.7035 8.00653 17.5 13.0002 17.5C14.4911 17.5 15.9134 17.2246 17.2507 16.7652L15.3653 15.348C14.5959 15.5156 13.8082 15.625 13.0002 15.625Z"
                        fill="#F8F7FA"
                      />
                    </svg>
                  )}
                </section>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
