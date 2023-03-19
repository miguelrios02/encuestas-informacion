export function Footer() {
  return (
    <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/footer-banner.png")] bg-cover bg-no-repeat bg-center -mt-4'>
      <div className="flex flex-col mt-36">
        <input
          className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
      </div>
    </div>
  );
}
