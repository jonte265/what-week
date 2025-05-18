'use client';

import { Button } from '@/components/ui/button';
import {
  isFriday,
  format,
  addDays,
  formatDistance,
  formatRelative,
  subDays,
  eachWeekOfInterval,
  eachWeekendOfYear,
} from 'date-fns';
import { sv } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import InfoCard from '@/components/custom/InfoCard';
import YearProgress from '@/components/custom/YearProgress';

export default function Home() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const weekends = eachWeekendOfYear(new Date(currentYear, 0, 1));

  console.log(weekends);

  const [isItFriday, setIsItFriday] = useState(false);

  useEffect(() => {
    setIsItFriday(isFriday(date));
  }, []);

  return (
    <main className='flex flex-col gap-4 p-4'>
      <YearProgress />
      <div className='grid grid-cols-2 gap-4'>
        <InfoCard
          infoTitle='Vecka'
          infoHeading={` ${format(date, 'w', { locale: sv })}`}
        />
        <InfoCard
          infoTitle='Är det fredag?'
          infoHeading={isItFriday ? 'JA 🎉' : 'NEJ'}
          infoDesc={`Idag är det ${format(date, 'eeee', { locale: sv })}`}
        />

        <InfoCard infoTitle='Datum veckor' infoDesc='yo' />

        <InfoCard
          infoTitle='Alla lördagar söndagar'
          infoDesc={
            <ul>
              {weekends.map((weekend, idx) => (
                <li key={idx}>
                  {format(weekend, 'dd MMMM yyyy', { locale: sv })}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  );
}
