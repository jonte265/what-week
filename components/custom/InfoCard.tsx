type infoCardType = {
  infoTitle: string;
  infoHeading?: string;
  infoDesc?: React.ReactNode;
  infoDescMuted?: string;
};

function InfoCard({
  infoTitle,
  infoHeading,
  infoDescMuted,
  infoDesc,
}: infoCardType) {
  return (
    <div className='border-2 rounded-2xl p-4 flex flex-col items-center justify-start gap-2'>
      <h2 className='text-2xl font-bold text-center'>{infoTitle}</h2>
      <h3 className='text-xl font-semibold text-blue-800 dark:text-blue-400'>
        {infoHeading}
      </h3>

      <p className='text-muted-foreground'>{infoDescMuted}</p>
      <div className=''>{infoDesc}</div>
    </div>
  );
}

export default InfoCard;
