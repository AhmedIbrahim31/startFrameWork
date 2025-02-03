import './hero.css';

export function Hero({ children, className = '' }) {
  // console.log(location.pathname);

  
  return (
    <h2 className={`relative text-3xl text-center w-fit pb-5 mx-auto font-bold hero ${className}`}>
      {children}
    </h2>
  );
}