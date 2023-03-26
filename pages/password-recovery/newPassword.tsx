import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

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
    router.push('/');
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
      className='bg-[url("/login-banner.png")] bg-cover bg-center  flex align-center justify-center 
       h-screen'
    >
      <div className="flex items-center justify-center  ">
        <div className="relative md:mt-20 text-app-grayLighter rounded-3xl  flex flex-col w-[378px] lg:w-[557px] h-[529px] app-card bg-app-gradient p-11 border border-grayLighter">
          <div className="pb-10">
            <h1 className="title-4 app-grayLighter pt-5">
              Elige una nueva contraseña
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col texto-3 gap-3"
          >
            <label className="flex flex-col gap-2">
              <span className="font-semibold">Elige una nueva contraseña</span>
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                type="text"
                placeholder="ejemplo@gmail.com"
                {...register('email')}
              />
            </label>
            <label className="flex flex-col gap-2 pb-10">
              <span className="font-semibold">Escríbela de nuevo</span>
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                type="text"
                placeholder="ejemplo@gmail.com"
                {...register('email')}
              />
            </label>
            <button className="rounded-lg  bg-app-yellow text-app-black h-[45px]">
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
