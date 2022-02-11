import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library     } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faBars, faFileDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faBars, faFileDownload);

export const Icon = ({icon, className}) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} />
  );
};