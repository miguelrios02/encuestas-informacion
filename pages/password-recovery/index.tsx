import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { forgetPassword } from '../../lib/services/auth.service';
type FormValues = {
  email: string;
};
export default function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    forgetPassword(data)
      .then((res) => {
        console.log(res);
        router.push('/password-recovery/newPassword');
      })
      .catch((res) => {
        console.log(res);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Ok',
        });
      });

    console.log(data);
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
      className='bg-[url("/bg-img.png")] bg-cover bg-center  flex align-center justify-center 
       h-screen'
    >
      <div className="flex items-center justify-center  ">
        <div className="relative md:mt-20 text-app-grayLighter rounded-3xl  flex flex-col w-[378px] lg:w-[557px] h-[529px] app-card bg-app-gradient p-11 border border-grayLighter">
          <div>
            <h1 className="title-4 app-grayLighter pt-5">
              Encontrémos tu cuenta
            </h1>
            <p className="title5 pt-6 pb-5 ">
              Para restablecer tu contraseña, escribe la dirección de correo
              electrónico que úedes hacer utilizado con Para cuándo?
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="application/x-www-form-urlencoded"
            className="flex flex-col texto-3 gap-3"
          >
            <label className="flex flex-col gap-1">
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                placeholder="ejemplo@gmail.com"
                {...register('email')}
              />
            </label>
            <div className="pb-10"></div>
            <button className="rounded-lg  bg-app-yellow text-app-black h-[45px]">
              Enviar correo de restablecimiento de contraseña
            </button>
            <Link href={'/login'}>
              <p className="text-app-yellow pt-3 text-center underline">
                O volver a iniciar sesión
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
