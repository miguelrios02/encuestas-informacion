import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import { categories } from '../../lib/data/categories';
import { categoriesPublications } from '../../lib/data/categoriesPublications.mock';

type FormData = {
  title: string;
  type: string;
  category: string;
  whyRecommend: string;
  referenceLink: string;
  images: FileList | null;
};

export default function CreatePublications() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [agregarImagenes, setAgregarImagenes] = useState(false);

  const handleSiguiente = () => {
    setAgregarImagenes(true);
  };

  const handleBack = () => {
    setAgregarImagenes(false);
  };

  const [publicData, setPublicData] = useState<FormData>();

  const onSubmit = async (data: FormData) => {
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
        {!agregarImagenes ? (
          <section>
            <h1>publicacion</h1>
            <p>informacion basica</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Título:
                <input type="text" {...register('title', { required: true })} />
                {errors.title && <span>Este campo es requerido</span>}
              </label>
              <br />

              <label>
                Tipo:
                <select {...register('type', { required: true })}>
                  {categories.map((item) => {
                    return (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {errors.type && <span>Este campo es requerido</span>}
              </label>
              <br />

              <label>
                Categoría:
                <select {...register('category', { required: true })}>
                  {categoriesPublications.map((item) => {
                    return (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {errors.category && <span>Este campo es requerido</span>}
              </label>
              <br />

              <label>
                ¿Por qué lo recomiendas?
                <textarea {...register('whyRecommend', { required: true })} />
                {errors.whyRecommend && <span>Este campo es requerido</span>}
              </label>
              <br />

              <label>
                Link de referencia:
                <input type="text" {...register('referenceLink')} />
              </label>
              <br />

              <label>
                Imágenes:
                <input
                  type="file"
                  {...register('images')}
                  multiple
                  accept="image/*"
                />
              </label>
              <br />

              <button onClick={handleSiguiente}>siguiente</button>
            </form>
          </section>
        ) : (
          <>
            <p>Agregar imágenes aquí</p>
            <button type="submit">Enviar</button>
            <button onClick={handleBack}>Back</button>
          </>
        )}
      </section>
    </div>
  );
}
