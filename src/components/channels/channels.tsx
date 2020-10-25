import React from 'react';
import CardChannel from '../cards/card-channel/card-channel';
import './channels.scss';
import Scrollbar from '../scrollbar/scrollbar';
import { data as channels } from '../../data/channels.data.json';

const Channels = (): React.ReactElement => (
  <div className="channels">
    <div className="channels__wrapper wrapper">
      <Scrollbar>
        {channels.map(({
          id,
          name,
          imageUrl,
          schedule,
        }) => (
          <CardChannel key={id} id={id} name={name} imageUrl={imageUrl} schedule={schedule} />
        ))}
      </Scrollbar>
    </div>
  </div>
);

export default Channels;
