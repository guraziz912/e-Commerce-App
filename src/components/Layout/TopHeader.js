//CSS import
import classes from './TopHeader.module.css';
//constants imports
import constants from '../../utils/constants';

// Top header for welcome message
const TopHeader = () => {
  return (
    <div className={classes.topHeader}>
      <ul className={classes.messageList}>
        <li>{constants.welcomeMessage}</li>
        <li>
          <i class={constants.mobileIcon}></i>
          {constants.phoneNumber}
        </li>
      </ul>
    </div>
  );
};
export default TopHeader;
