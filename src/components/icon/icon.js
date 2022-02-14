import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library     } from '@fortawesome/fontawesome-svg-core';
import { 
  faCoffee, 
  faBars, 
  faFileDownload, 
  faMobileAlt,
  faPencilRuler,
  faCode,
  faThumbsUp,
  faTachometerAlt,
  faCrosshairs,
  faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCoffee, 
  faBars, 
  faFileDownload, 
  faMobileAlt,
  faPencilRuler,
  faCode,
  faThumbsUp,
  faTachometerAlt,
  faCrosshairs,
  faGlobeAmericas
);

export const Icon = ({icon, iconSize = 'xs', className=''}) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} size={iconSize} aria-hidden="true" />
  );
};