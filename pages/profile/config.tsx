import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FieldArray, useForm } from 'react-hook-form';
import Header from '../../components/navigation/header/Header';
type FormValues = {
  firstName: string;
  lastName: string;
  profile_image: FieldArray;
  category_image1: FieldArray;
  category_image2: FieldArray;
  category_image3: FieldArray;
};

export default function ConfigPage() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      profile_image: [],
      category_image1: [],
      category_image2: [],
      category_image3: [],
    },
  });

  const [profileImagState, setProfileImagState] = useState<FieldArray>('');
  const [categoryImag1State, setCategoryImag1State] = useState<FieldArray>('');
  const [categoryImag2State, setCategoryImag2State] = useState<FieldArray>('');
  const [categoryImag3State, setCategoryImag3State] = useState<FieldArray>('');
  const profileImg = watch('profile_image');

  const categoryImg1 = watch('category_image1');
  const categoryImg2 = watch('category_image2');
  const categoryImg3 = watch('category_image3');

  useEffect(() => {
    if (profileImg?.[0]) {
      setProfileImagState(URL.createObjectURL(profileImg[0]));
      console.log(profileImagState);
    }
    if (categoryImg1?.[0]) {
      setCategoryImag1State(URL.createObjectURL(categoryImg1[0]));
      console.log(profileImagState);
    }
    if (categoryImg2?.[0]) {
      setCategoryImag2State(URL.createObjectURL(categoryImg2[0]));
      console.log(profileImagState);
    }
    if (categoryImg3?.[0]) {
      setCategoryImag3State(URL.createObjectURL(categoryImg3[0]));
      console.log(profileImagState);
    }
  }, [profileImg, categoryImg1, categoryImg2, categoryImg3]);

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
            <div className="flex flex-col">
              <label
                style={{
                  position: 'relative',
                  backgroundImage: `url(${profileImagState})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  width: '260px',
                  height: '206px',
                  borderRadius: '15px',

                  filter: profileImagState ? 'none' : 'grayscale(100%)',
                }}
                className="flex items-center title-3 text-app-blue justify-center max-w-xs gap-2 bg-app-grayLight w-[260px] h-[206px] mb-[19px] rounded-2xl"
              >
                <input
                  className=" hidden "
                  type="file"
                  {...register('profile_image')}
                />

                {profileImagState && true ? (
                  ''
                ) : (
                  <p className="text-app-blue">+</p>
                )}
              </label>
              <span className="subtitle-2 text-app-grayDark text-center  ">
                Agregra una foto para tu perfil
              </span>
            </div>

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
            <div className="flex flex-col gap-2">
              <label
                style={{
                  position: 'relative',
                  backgroundImage: `url(${categoryImag1State})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  maxWidth: '300px',
                  height: '206px',
                  borderRadius: '15px',

                  filter: categoryImag1State ? 'none' : 'grayscale(100%)',
                }}
                className="flex items-center title-3 text-app-blue justify-center max-w-[300px] gap-2 bg-app-grayLight h-[206px] mb-[19px] rounded-2xl"
              >
                <input
                  className=" hidden "
                  type="file"
                  {...register('category_image1')}
                />

                {categoryImag1State && true ? (
                  ''
                ) : (
                  <p className="text-app-blue">+</p>
                )}
              </label>
              <span className="subtitle-2 text-app-grayDark text-center  ">
                Añade una categoria
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label
                style={{
                  position: 'relative',
                  backgroundImage: `url(${categoryImag2State})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  maxWidth: '300px',
                  height: '206px',
                  borderRadius: '15px',

                  filter: categoryImag2State ? 'none' : 'grayscale(100%)',
                }}
                className="flex items-center title-3 text-app-blue justify-center max-w-[300px] gap-2 bg-app-grayLight h-[206px] mb-[19px] rounded-2xl"
              >
                <input
                  className=" hidden "
                  type="file"
                  {...register('category_image2')}
                />

                {categoryImag2State && true ? (
                  ''
                ) : (
                  <p className="text-app-blue">+</p>
                )}
              </label>
              <span className="subtitle-2 text-app-grayDark text-center  ">
                Añade una categoria
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label
                style={{
                  position: 'relative',
                  backgroundImage: `url(${categoryImag3State})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  maxWidth: '300px',
                  height: '206px',
                  borderRadius: '15px',

                  filter: categoryImag3State ? 'none' : 'grayscale(100%)',
                }}
                className="flex items-center title-3 text-app-blue justify-center max-w-[300px] gap-2 bg-app-grayLight h-[206px] mb-[19px] rounded-2xl"
              >
                <input
                  className=" hidden "
                  type="file"
                  {...register('category_image3')}
                />

                {categoryImag3State && true ? (
                  ''
                ) : (
                  <p className="text-app-blue">+</p>
                )}
              </label>
              <span className="subtitle-2 text-app-grayDark text-center  ">
                Añade una categoria
              </span>
            </div>
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
