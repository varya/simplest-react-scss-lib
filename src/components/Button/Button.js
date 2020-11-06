import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

class Button extends React.Component {

  static propTypes = {
    /**
     * Component's id
    */
    id: PropTypes.string,
    /** 
     * The function that is run when user clicks the button
     */
    onClick: PropTypes.func,
    /** 
     * Component's content. Automatically detected.
     */
    children: PropTypes.node,
    /** 
     * Type of the button 
     */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /**
     * Aria-label text for button when loading
     */
    i18_button_loading_ariaText: PropTypes.string,
  };

  static defaultProps = {
    id: null,    
    onClick: () => {},
    children: null,
    type: 'button',
    i18_button_loading_ariaText: 'Lataa',
  };

  render() {

    const {
      id,     
      onClick,
      children,
      type,
      i18_button_loading_ariaText,
      ...otherProps
    } = this.props;

    

    return(
      <button
        id={id}
        type={type}
        className={styles.button}
        onClick={onClick}
        aria-label={i18_button_loading_ariaText}
        {...otherProps}>
          {children}
      </button>
    );
    
  }

}

export default Button;
