import Redirect from '../RedirectPage/Redirect';
import styles from './Settings.module.css';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Settings = () => {
  return (
    <div className={styles.tamanhoTela}>Settings</div>
  )
}

export default withAuthenticationRequired(Settings, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<Redirect/>)
});