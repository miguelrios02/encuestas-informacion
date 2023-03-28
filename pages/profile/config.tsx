import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Header from '../../components/navigation/header/Header';
type FormValues = {
  firstName: string;
  lastName: string;
};

export default function ConfigPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const router = useRouter();
  const onSubmit = async (data: FormValues) => {
    router.push('/');
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
    <div>
      <Header />
      <div className="h-[129px] flex items-center bg-app-blue text-white title-6">
        <p className="ml-[170px]">Perfil</p>
      </div>

      <div className="md:pl-[170px] pl-[50px] pt-[70px] pb-[86px] md:pr-[170px] pr-[50px] grid ">
        <p className="subtitle-4 pb-5">Información de contacto</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col texto-3 gap-3"
        >
          <div
            className="grid  
             sm:grid-cols-[220px_minmax(300px,_1fr)] sm:space-x-[80px]"
          >
            <label className="flex flex-col max-w-xs gap-2 ">
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                type="file"
              />
              <span className="subtitle-2 text-app-grayDark ">
                Agregra una foto para tu perfil
              </span>
            </label>

            <div className="flex flex-col">
              <label className="relative flex flex-col gap-1 mt-5">
                <span className="pl-2 pr-2 bg-white text-app-grayDark absolute -top-2 left-5 flex items-center subtitle-1">
                  First Name
                </span>
                <input
                  className=" rounded-lg py-2 pl-10 pr-2  border border-grayLighter bg-transparent"
                  type="text"
                  {...register('firstName')}
                />
              </label>

              <label className="relative flex flex-col mt-9">
                <span className="pl-2 pr-2 bg-white text-app-grayDark absolute -top-2 left-5 flex items-center subtitle-1">
                  Last name
                </span>
                <input
                  className=" rounded-lg py-2 pl-10 pr-2  border border-grayLighter bg-transparent"
                  type="text"
                  {...register('lastName')}
                />
              </label>
            </div>
          </div>
          <p className="subtitle-4">Mis intereses</p>
          <div className=" grid sm:grid-cols-3 sm:space-x-[20px]">
            <label className="flex flex-col gap-2">
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                type="file"
              />
              <span className="subtitle-2 text-app-grayDark">
                Añade una categoria
              </span>
            </label>
            <label className="flex flex-col gap-2">
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                type="file"
              />
              <span className="subtitle-2 text-app-grayDark">
                Añade una categoria
              </span>
            </label>
            <label className="flex flex-col gap-2">
              <input
                className="p-4 rounded-lg  border border-grayLighter bg-transparent"
                type="file"
              />
              <span className="subtitle-2 text-app-grayDark">
                Añade una categoria
              </span>
            </label>
          </div>
          <div className="flex justify-center ">
            <button className=" rounded-3xl bg-app-blue subtitle-2 text-app-grayLighter h-[47px] w-[183px]">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
      <div className='min-h-[182px]  flex-col bg-[url("/footer-banner.png")] bg-cover bg-no-repeat bg-center '></div>
    </div>
  );
}
