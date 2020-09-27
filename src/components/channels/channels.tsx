import React from 'react';
import CardChannel, { CardChannelInterface } from '../cards/card-channel/card-channel';
import './channels.scss';

interface ChannelsInterface {
  channels: CardChannelInterface[];
}

const Channels = ({ channels }: ChannelsInterface): React.ReactElement => (
  <div className="channels">
    <div className="channels__wrapper wrapper">
      {channels.map(({
        id,
        name,
        imageUrl,
        schedule,
      }) => (
        <CardChannel key={id} id={id} name={name} imageUrl={imageUrl} schedule={schedule} />
      ))}
    </div>
  </div>
);

export default Channels;
