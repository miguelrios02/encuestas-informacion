import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FieldArray, useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import { categories } from '../../lib/data/categories';
import { categoriesPublications } from '../../lib/data/categoriesPublications.mock';

type FormData = {
  title: string;
  type: string;
  category: string;
  whyRecommend: string;
  referenceLink: string;
  publication_image1: FieldArray;
  publication_image2: FieldArray;
  publication_image3: FieldArray;
};

export default function CreatePublications() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      type: '',
      category: '',
      whyRecommend: '',
      referenceLink: '',
      profile_image: [],
      publication_image1: [],
      publication_image2: [],
      publication_image3: [],
    },
  });

  const [publicationImag1State, setPublicationImag1State] =
    useState<FieldArray>('');
  const [publicationImag2State, setPublicationImag2State] =
    useState<FieldArray>('');
  const [publicationImag3State, setPublicationImag3State] =
    useState<FieldArray>('');

  const publicationImg1 = watch('publication_image1');
  const publicationImg2 = watch('publication_image2');
  const publicationImg3 = watch('publication_image3');

  useEffect(() => {
    if (publicationImg1?.[0]) {
      setPublicationImag1State(URL.createObjectURL(publicationImg1[0]));
    }
    if (publicationImg2?.[0]) {
      setPublicationImag2State(URL.createObjectURL(publicationImg2[0]));
    }
    if (publicationImg3?.[0]) {
      setPublicationImag3State(URL.createObjectURL(publicationImg3[0]));
    }
  }, [publicationImg1, publicationImg2, publicationImg3]);

  const [agregarImagenes, setAgregarImagenes] = useState(false);
  const router = useRouter();

  const handleSiguiente = () => {
    setAgregarImagenes(true);
  };

  const handleBack = () => {
    if (agregarImagenes === false) {
      router.push('/');
    } else {
      setAgregarImagenes(false);
    }
  };

  const [publicData, setPublicData] = useState<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setPublicData(data);
    console.log(publicData);
  };
  return (
    <div className="flex flex-col md:flex-row">
      <section className="relative bg-app-blue md:h-screen md:min-w-[255px] flex items-center justify-center ">
        <div className="app-container ">
          <h1 className=" flex flex-col items-center justify-center md:pb-20">
            <Logo />
          </h1>
          <h2 className="pt-10  title-8 md:w-[180px] text-app-yellow">
            ¡Bienvenido, creador!
          </h2>
          <p className="pt-10 md:w-[180px] text-app-white">
            A continuación puedes completar la info de la marca, artista o
            torneo que quieres cerca.
          </p>
          <button className="subtitle-8 text-app-white absolute bottom-10 hidden md:block ">
            Ayuda
          </button>
        </div>
      </section>
      <section className="app-container ">
        <button
          className=" relative xl:-left-20 subtitle-7 text-app-blue md:pb-10"
          onClick={handleBack}
        >
          Back
        </button>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {!agregarImagenes ? (
              <section>
                <div className="progress-bar bg-app-grayLight h-[8px] rounded-xl mt-5 mb-5">
                  <div className="progress w-1/2 bg-app-blue h-[8px] rounded-xl"></div>
                </div>
                <h1 className="subtitle-4 pt-4">Publicación</h1>
                <p className="subtitle-2 pb-6 pt-2">Informacion básica</p>

                <label className="  relative flex flex-col gap-1 mt-5">
                  <span className="pl-2 pr-2 bg-white text-app-graymedium absolute -top-2 left-5 flex items-center subtitle-2">
                    Titulo de publicación
                  </span>
                  <input
                    className=" rounded-lg py-2 pl-10 pr-2  border border-app-graymedium bg-transparent h-[50px]"
                    type="text"
                    {...register('title', { required: true })}
                  />
                  {errors.title && <span>Este campo es requerido</span>}
                </label>
                <div className="grid md:grid-cols-2 gap-2  items-center">
                  <label className="  relative flex flex-col gap-1 mt-5">
                    <select
                      {...register('type', { required: true })}
                      className="h-[50px] rounded-lg py-2 pl-10 pr-2 text-app-graymedium subtitle-2 border border-app-graymedium bg-transparent"
                    >
                      <option value="" disabled selected>
                        Tipo
                      </option>
                      {categories.map((item) => {
                        return (
                          <option
                            defaultValue={'elija una opción'}
                            className="text-black "
                            key={item.id}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    {errors.type && <span>Este campo es requerido</span>}
                  </label>

                  <label className="  relative flex flex-col gap-1 mt-5">
                    <select
                      {...register('category', { required: true })}
                      className=" h-[50px] rounded-lg py-2 pl-10 pr-2 text-app-graymedium subtitle-2 border border-app-graymedium bg-transparent"
                    >
                      <option value="" disabled selected>
                        Categoría
                      </option>
                      {categoriesPublications.map((item) => {
                        return (
                          <option
                            defaultValue={'elija una opción'}
                            className="text-black "
                            key={item.id}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    {errors.category && <span>Este campo es requerido</span>}
                  </label>
                </div>
                <label className=" relative flex flex-col gap-1 mt-5 ">
                  <span className="pl-2 pr-2 bg-white text-app-graymedium absolute -top-2 left-5 flex items-center subtitle-2">
                    ¿Por qué lo recomiendas?
                  </span>

                  <textarea
                    className=" rounded-lg py-2 pl-10 pr-2 min-h-[115px] border border-app-graymedium bg-transparent"
                    {...register('whyRecommend', { required: true })}
                  />
                  {errors.whyRecommend && <span>Este campo es requerido</span>}
                </label>

                <label className=" relative flex flex-col gap-1 mt-5">
                  <span className="pl-2 pr-2 bg-white text-app-graymedium absolute -top-2 left-5 flex items-center subtitle-2">
                    Link de referencia
                  </span>

                  <input
                    className="h-[50px] rounded-lg py-2 pl-10 pr-2  border border-app-graymedium bg-transparent"
                    type="text"
                    {...register('referenceLink')}
                  />
                </label>
                <div className="flex justify-center  app-center">
                  <button
                    className=" mt-10 rounded-3xl bg-app-blue subtitle-2 text-app-grayLighter h-[47px] w-[124px] "
                    onClick={handleSiguiente}
                  >
                    siguiente
                  </button>
                </div>
              </section>
            ) : (
              <>
                <div className="progress-bar bg-app-grayLight h-[8px] rounded-xl mt-5 mb-5">
                  <div className="progress w-2/2 bg-app-blue h-[8px] rounded-xl"></div>
                </div>
                <h1 className="subtitle-4 pt-4 md:pt-[67px]">Fotos</h1>
                <p className="subtitle-2 pb-6 pt-2">
                  Selecciona maximo tres fotos para crear una galería
                </p>

                <div className=" grid sm:grid-cols-3 gap-7  items-center rounded-xl  p-[24px]  border border-app-graymedium ">
                  <div className="flex flex-col gap-2 ">
                    <label
                      style={{
                        position: 'relative',
                        backgroundImage: `url(${publicationImag1State})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',

                        height: '206px',
                        borderRadius: '15px',

                        filter: publicationImag1State
                          ? 'none'
                          : 'grayscale(100%)',
                      }}
                      className="flex items-center title-3 text-app-blue justify-center  gap-2 bg-app-grayLight h-[206px] rounded-2xl"
                    >
                      <input
                        className=" hidden "
                        type="file"
                        {...register('publication_image1')}
                      />

                      {publicationImag1State && true ? (
                        ''
                      ) : (
                        <p className="text-app-blue">+</p>
                      )}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <label
                      style={{
                        position: 'relative',
                        backgroundImage: `url(${publicationImag2State})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',

                        height: '206px',
                        borderRadius: '15px',

                        filter: publicationImag2State
                          ? 'none'
                          : 'grayscale(100%)',
                      }}
                      className="flex items-center title-3 text-app-blue justify-center  gap-2 bg-app-grayLight h-[206px]  rounded-2xl"
                    >
                      <input
                        className=" hidden "
                        type="file"
                        {...register('publication_image2')}
                      />

                      {publicationImag2State && true ? (
                        ''
                      ) : (
                        <p className="text-app-blue">+</p>
                      )}
                    </label>
                  </div>

                  <div className="flex flex-col gap-2  justify-center ">
                    <label
                      style={{
                        position: 'relative',
                        backgroundImage: `url(${publicationImag3State})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',

                        height: '206px',
                        borderRadius: '15px',
                        filter: publicationImag3State
                          ? 'none'
                          : 'grayscale(100%)',
                      }}
                      className="flex items-center title-3 text-app-blue justify-center  bg-app-grayLight h-[206px]  rounded-2xl"
                    >
                      <input
                        className=" hidden "
                        type="file"
                        {...register('publication_image3')}
                      />

                      {publicationImag3State && true ? (
                        ''
                      ) : (
                        <p className="text-app-blue">+</p>
                      )}
                    </label>
                  </div>
                </div>
                <div className="flex justify-center  app-center">
                  <button
                    className=" mt-[66px] md:mt-[82px] rounded-3xl bg-app-blue subtitle-2 text-app-grayLighter h-[47px] w-[124px] "
                    type="submit"
                  >
                    Publicar
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
