'use client';

import { Button } from '@/components/ui/button';
import {
  isFriday,
  format,
  addDays,
  formatDistance,
  formatRelative,
  subDays,
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

export default function Home() {
  const date = new Date();

  const [isItFriday, setIsItFriday] = useState(false);

  useEffect(() => {
    setIsItFriday(isFriday(date));
  }, []);

  return (
    <main className='p-4'>
      <div className='grid gap-4'>
        <InfoCard
          infoTitle='Är det fredag?'
          infoHeading={isItFriday ? 'JA' : 'NEJ'}
          infoDesc={`Idag är det ${format(date, 'eeee', { locale: sv })}`}
        />

        <InfoCard infoTitle={`V: ${format(date, 'w', { locale: sv })}`} />
      </div>
      <p>{format(date, 'yyyy-MM-dd HH:mm')}</p>
    </main>
  );
}
