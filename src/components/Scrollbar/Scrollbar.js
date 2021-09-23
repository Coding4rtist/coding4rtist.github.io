import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import useCustomScrollbar from './useCustomScrollbar';

import * as styles from './Scrollbar.module.scss';

const cx = (...args) => args.filter(Boolean).join(' ');

const CustomScrollbar = forwardRef(
  ({ scrollDisabled, className, innerClassName, children, ...props }, ref) => {
    console.log(children, ref)
    const [wrapperProps, scrollerProps, trackProps] = useCustomScrollbar(
      children,
      ref,
      { disabled: scrollDisabled },
    );

    return (
      <div className={cx(className, styles.main)} {...props}>
        <div className={styles.wrapper} {...wrapperProps}>
          <div className={cx(innerClassName, styles.inner)} {...scrollerProps}>
            {children}
          </div>
        </div>
        <div className={styles.track} {...trackProps} />
      </div>
    );
  },
);

CustomScrollbar.propTypes = {
  scrollDisabled: PropTypes.bool,
  innerClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CustomScrollbar.displayName = 'CustomScrollbar';

export default CustomScrollbar;