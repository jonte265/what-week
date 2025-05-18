type infoCardType = {
  infoTitle: any;
  infoHeading?: any;
  infoDesc?: any;
  infoDescMuted?: any;
};

function InfoCard({
  infoTitle,
  infoHeading,
  infoDescMuted,
  infoDesc,
}: infoCardType) {
  return (
    <div className='border-2 rounded-2xl p-4 flex flex-col items-center justify-start gap-2'>
      <h2 className='text-2xl font-bold'>{infoTitle}</h2>
      <h3 className='text-xl font-semibold text-blue-800 dark:text-blue-400'>
        {infoHeading}
      </h3>

      <p className='text-muted-foreground'>{infoDescMuted}</p>
      <p className=''>{infoDesc}</p>
    </div>
  );
}

export default InfoCard;
