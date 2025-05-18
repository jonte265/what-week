import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import { ModeToggle } from '../ui/ModeToggle';

function HeaderNav() {
  const date = new Date();
  return (
    <header className='flex justify-between items-center p-4 max-w-4xl mx-auto'>
      <h1 className='font-semibold'>Vilken Vecka 📅</h1>
      <p>{format(date, 'd MMMM yyyy ', { locale: sv })}</p>
      <ModeToggle />
    </header>
  );
}

export default HeaderNav;
