'use client';
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import Logo from '../icons/Logo';


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  // Función para determinar si el menú debería estar abierto inicialmente
  const shouldMenuBeOpen = () => {
    return window.innerWidth >= 1024;
  };


  useEffect(() => {
    // Establecer el estado inicial al cargar la página
    setIsMobileMenuOpen(shouldMenuBeOpen());

    const handleResize = () => {
      // Abre el menú desplegable cuando el tamaño de la pantalla es menor o igual a 1024
      setIsMobileMenuOpen(window.innerWidth >= 1024);
    };

    // Agrega el listener para manejar el cambio de tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente




  return (
    <header className='top-0 flex flex-col items-center justify-between fixed w-screen z-10 lg:static'>
      <div className='flex items-center justify-between w-full px-8 py-4 bg-emerald-500 shadow-lg md:shadow-none'>
        <Link className='flex justify-center items-center gap-1 text-white font-semibold text-xl lg:text-2xl' href='/'>
          <Logo />
          <span>OFERTAS</span>
        </Link>
        <div className='flex items-center'>

          <button className='lg:hidden' onClick={handleMobileMenuToggle}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

        </div>
      </div>
      <nav
        className={`w-full bg-white border-t shadow-md border-t-neutral-400 pr-8 flex flex-col  items-end gap-8 text-neutral-600 font-semibold lg:top-0 lg:z-10  lg:flex-row lg:justify-center lg:items-center
                 ${isMobileMenuOpen ? 'h-auto py-6 transition-all duration-1000 lg:transition-none' : 'h-0 overflow-hidden'}`}>
        <Link className='hover:text-neutral-950' href={'/'}>Inicio</Link>
        <Link className='hover:text-neutral-950' href={'/menu'}>Menu</Link>
        <Link className='hover:text-neutral-950' href={'/#about'}>Nosotros</Link>
        <Link className='hover:text-neutral-950' href={'/#contact'}>Contacto</Link>

      </nav>
    </header>
  );
}
