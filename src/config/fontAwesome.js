import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faBolt,
  faCalendar,
  faMeh,
  faFrown,
  faSmile,
  faSearch,
  faPlus,
  faBookmark,
  faMoneyBillWave,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const configFontAwesome = () => {
  library.add(faCoffee);
  library.add(faBolt);
  library.add(faCalendar);
  library.add(faMeh);
  library.add(faFrown);
  library.add(faSmile);
  library.add(faSearch);
  library.add(faPlus);
  library.add(faBookmark);
  library.add(faMoneyBillWave);
  library.add(faClock);
};

export default configFontAwesome;
