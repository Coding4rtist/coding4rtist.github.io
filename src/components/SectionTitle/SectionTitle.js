import PropTypes from 'prop-types'
import React from 'react'
import * as styles from './SectionTitle.module.scss'

const SectionTitle = ({ title, subtitle }) => (
  <div className={styles.sectionTitle}>
      <h3>{title}</h3>
      <h1>{subtitle}</h1>
      <div className={styles.afBorder}></div>
   </div>
)

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SectionTitle

