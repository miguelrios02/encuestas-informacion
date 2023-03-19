import Link from 'next/link';
import { useEffect, useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}
const Header = () => {
  const [isLogg, setIsLogg] = useState<User>();

  useEffect(() => {
    const dataUser = localStorage.getItem('data');
    const data = dataUser ? JSON.parse(dataUser) : null;
    setIsLogg(data.data);
    console.log(data);
    console.log(data.data.email);
    console.log(isLogg);
  }, []);

  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <h2>PC?</h2>
      <div>
        {isLogg === null ? (
          <ul className="flex items-center justify-between  sm:px-12 py-4">
            <li className="px-4 text-[#1B4DB1]">
              <span className="w-20px font-bold text-[20px] px-1">+</span>
              Crear publicación
            </li>
            <li className="px-4">
              <Link href="log-in">Log In</Link>
            </li>
            <li className="px-4">
              <Link href="sign-up">Sign Up</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center justify-between  sm:px-12 py-4">
            <li className="px-4 text-[#1B4DB1]">
              <span className="w-20px font-bold text-[20px] px-1">+</span>
              Crear Publicación
            </li>
            <li className="px-4">
              <Link href="log-in">Mis Votos</Link>
            </li>
            <li className="px-4">
              <Link href="sign-up">{isLogg?.email}</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
