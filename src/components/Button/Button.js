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

    const allClasses = classNames([
      styles.button,
      disabled ? styles[`button--color-disabled`] : styles[`button--color-${color}`],
      styles[`button--size-${size}`],
      block ? styles[`button--block`] : null,
      loading ? styles[`button--loading`] : null,
      className ? className : null,
    ]);

    
    let iconChildren = null;
    
    // Here we give additional classes for icons in button
    // If button has any other ocntent than text, the children's type is 'object'
    if(children.length > 1 && typeof children === 'object') {

      let theRest = '';

      // Making sure we only catch nodes that are icon components
      if(children[0].type && children[0].type.displayName.startsWith('Icon')) {
        let firstIcon = children[0];

        for (let i = 1; i < children.length; i++) {
          theRest += children[i];
        }

        let iconComponent = React.cloneElement(firstIcon, {
          className: classNames([
            styles[`button__icon`],
            styles[`button__icon-first`],
            (firstIcon.props.className || ''),
          ])
        });

        iconChildren = <span className={styles[`button__content`]} aria-hidden={loading || null}>{iconComponent}{theRest.trim()}</span>;
      }
      // Making sure we only catch nodes that are icon components
      else if(children[children.length-1].type && children[children.length-1].type.displayName.startsWith('Icon')) {
        let lastIcon = children[children.length-1];

        for (let i = 0; i < children.length-1; i++) {
          theRest += children[i];
        }

        let iconComponent = React.cloneElement(lastIcon, {
          className: classNames([
            styles[`button__icon`],
            styles[`button__icon-last`],
            (lastIcon.props.className || ''),
          ])
        });

        iconChildren = <span className={styles[`button__content`]} aria-hidden={loading || null}>{theRest.trim()}{iconComponent}</span>;
      }

    }
    else {
      iconChildren = <span className={styles[`button__content`]} aria-hidden={loading || null}>{children}</span>;
    }

    const loaderSizes = {
      s: "xs",
      m: "s",
    }

    let loaderSize = loaderSizes[size];
    

    return(
      <button
        id={id}
        type={type}
        className={allClasses}
        onClick={onClick}
        aria-label={loading ? i18_button_loading_ariaText : null}
        disabled={disabled}
        {...otherProps}>
          {iconChildren}
          {loading ? <LoadingSpinner size={loaderSize} i18n_loadingspinner_ariaText={null} /> : null}
      </button>
    );
    
  }

}

export default Button;
