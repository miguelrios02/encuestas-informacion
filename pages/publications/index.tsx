import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import { IPublications } from '../../lib/interfaces/publications.interface';

export default function CreatePublications() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      type: '',
      category: '',
      review: '',
      url: '',
      photo: '',
    },
  });

  const [publicData, setPublicData] = useState<IPublications>();

  const onSubmit = async (data: IPublications) => {
    console.log(data);
    setPublicData(data);
    console.log(publicData);
  };
  return (
    <div className="flex ">
      <section className="bg-app-blue w-64 h-[100vh]">
        <h1 className="pt-20 ">
          <Logo />
        </h1>
        <h2 className="pt-10 ml-10 text-app-yellow">¡Bienvenido, creador!</h2>
        <p className="pt-10 ml-2 text-app-white">
          A continuación puedes completar la info de la marca, artista o torneo
          que quieres cerca.
        </p>
      </section>
      <section>
        <button>Back</button>
        <div>barra de carga</div>
        <section>
          <h1>publicacion</h1>
          <p>informacion basica</p>

          <form className="flex" onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span className="font-semibold">Title</span>
              <input
                className="px-3 rounded-3xl bg-white text-[#A7A6A7] p-1"
                type="text"
                {...register('title')}
              />
            </label>

            <label>
              <span>Type</span>
              <input type="text" {...register('type')} />
            </label>
            <label>
              <span className="font-semibold">category</span>
              <input type="text" {...register('category')} />
            </label>
            <label>
              <span className="font-semibold">review</span>
              <input type="text" {...register('review')} />
            </label>
            <label>
              <span className="font-semibold">Link</span>
              <input type="text" {...register('url')} />
            </label>
            <button>enviar</button>
          </form>
        </section>
      </section>
    </div>
  );
}
