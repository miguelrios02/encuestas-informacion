import { mockInterest } from '../../lib/data/interests.mock';
const Interest = () => {
  return (
    <div className="bg-app-grayLighter app-container mb-10">
      <div className="pl-6 ">
        <h2 className=" p-4 subtitle-4 text-app-grayDark">
          !Hagamoslo más personal!
        </h2>
        <p className=" pl-4 subtitle-2 text-app-grayDark">
          Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
          gusto
        </p>
        <div className="app-container justify-between flex gap-2 ">
          <div className="flex gap-2 flex-wrap ">
            {mockInterest.map((item, index) => {
              return (
                <div
                  className="p-4 rounded-3xl  border-2 border-grayLighter"
                  key={index}
                >
                  <button>{item}</button>
                </div>
              );
            })}
          </div>
        </div>
        <p className=" p-4 subtitle-2 text-app-blue">
          Ver todos los intereses{' '}
        </p>
      </div>
    </div>
  );
};

export default Interest;
