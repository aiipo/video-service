import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({
  children,
}): React.ReactPortal => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(el.current);
    return (): void => {
      document.body.removeChild(el?.current);
    };
  }, [el]);

  return createPortal(children, el.current);
};

export default Portal;
