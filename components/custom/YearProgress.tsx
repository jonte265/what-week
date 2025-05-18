import { getDayOfYear } from 'date-fns';

function YearProgress() {
  const date = new Date();
  const dayOfYear = getDayOfYear(date);
  const percent = Math.floor((dayOfYear / 365) * 100);

  return (
    <div className='border-2 rounded-2xl p-4 flex flex-col items-center justify-center gap-2'>
      <h2 className='text-2xl font-bold'>Året kvar 🥶</h2>
      <progress
        value={dayOfYear}
        max={365}
        className='w-full h-4 rounded-full overflow-hidden [&::-webkit-progress-bar]:bg-gray-200 dark:[&::-webkit-progress-bar]:bg-gray-600 [&::-webkit-progress-value]:bg-blue-800 dark:[&::-webkit-progress-value]:bg-blue-400'
      ></progress>

      <p className='font-semibold'>{percent}%</p>
    </div>
  );
}

export default YearProgress;
