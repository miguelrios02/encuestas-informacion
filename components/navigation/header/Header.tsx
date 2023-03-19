import Link from 'next/link';
import { useEffect, useState } from 'react';
import { User } from '../../../lib/interfaces/user.interface';
import { IconLogo } from '../../assets/logo/IconLogo';

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
      <h2>
        <IconLogo />
      </h2>
      <div>
        {isLogg === null ? (
          <ul className="flex items-center justify-between  sm:px-12 py-4">
            <li className="px-4 text-app-blue">
              <span className="w-20px font-bold text-[40px] px-1">+</span>
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
            <li className="px-4 text-app-blue flex items-center justify-center">
              <span className="w-16px font-light text-[35px] px-1">+</span>
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
