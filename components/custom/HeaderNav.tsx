import { ModeToggle } from '../ui/ModeToggle';

function HeaderNav() {
  return (
    <header className='flex justify-between items-center p-4'>
      <h1 className='font-semibold'>Vilken Vecka</h1>
      <ModeToggle />
    </header>
  );
}

export default HeaderNav;
