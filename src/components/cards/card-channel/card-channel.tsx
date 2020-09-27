import React from 'react';
import './card-channel.scss';

export interface CardChannelInterface {
  id: string;
  name: string;
  imageUrl: string;
  schedule: Array<{
    id: number;
    time: string;
    program: string;
  }>;
}

const CardChannel = ({
  name,
  imageUrl,
  schedule,
}: CardChannelInterface): React.ReactElement => (
  <div className="card-channel">
    <div className="card-channel-container">
      <div className="card-channel-container__logo">
        <img src={imageUrl} alt={`Channel is ${name}`} />
      </div>
      <div className="card-channel-container__details details-container">
        <div className="details-container__name">{name}</div>
        <div className="details-container__schedule schedules">
          {schedule.map(({ id, time, program }, index) => (
            <div className={`schedules-program ${index === 0 ? 'schedules-program--active' : ''}`} key={id}>
              <span className="schedules-program__time">{time}</span>
              <span className="schedules-program__name">{program}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CardChannel;
