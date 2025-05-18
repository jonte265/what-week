'use client';

import {
  isFriday,
  format,
  eachWeekOfInterval,
  eachWeekendOfYear,
  endOfWeek,
} from 'date-fns';
import { sv } from 'date-fns/locale';
import { useEffect, useState } from 'react';

import InfoCard from '@/components/custom/InfoCard';
import YearProgress from '@/components/custom/YearProgress';

export default function Home() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const weekends = eachWeekendOfYear(new Date(currentYear, 0, 1));

  const allWeeks = eachWeekOfInterval(
    {
      start: new Date(currentYear, 0, 1),
      end: new Date(currentYear, 11, 31),
    },
    { weekStartsOn: 1 }
  );

  const [isItFriday, setIsItFriday] = useState(false);

  useEffect(() => {
    setIsItFriday(isFriday(date));
  }, []);

  return (
    <main className='flex flex-col gap-4 p-4'>
      <YearProgress />
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
        <InfoCard
          infoTitle='Vecka'
          infoHeading={` ${format(date, 'w', { locale: sv })}`}
        />

        <InfoCard
          infoTitle='Är det fredag?'
          infoHeading={isItFriday ? 'JA 🎉' : 'NEJ'}
          infoDescMuted={`Idag är det ${format(date, 'eeee', { locale: sv })}`}
        />

        <InfoCard
          infoTitle={`Alla veckor ${currentYear}`}
          infoDesc={
            <ul className='text-sm space-y-1'>
              {allWeeks.map((weekStartDate, index) => {
                const weekEndDate = endOfWeek(weekStartDate, {
                  weekStartsOn: 1,
                });

                return (
                  <li key={index}>
                    <strong>
                      Vecka {format(weekStartDate, 'w', { locale: sv })}
                    </strong>
                    :<br />
                    {format(weekStartDate, 'd MMM', { locale: sv })} –{' '}
                    {format(weekEndDate, 'd MMM yyyy', { locale: sv })}
                  </li>
                );
              })}
            </ul>
          }
        />

        <InfoCard
          infoTitle={`Alla lördagar och söndagar ${currentYear}`}
          infoDesc={
            <ul className='text-sm space-y-1'>
              {weekends.map((weekendDate, idx) => (
                <li key={idx}>
                  {format(weekendDate, 'eeee d MMMM', { locale: sv })}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  );
}
