import React from 'react';
import styles from './card.module.scss';

export const Card = (props) => {
  const { teamItems, planItems } = props;

  const _renderTeamMembers = () => {
    if (teamItems) {
      return teamItems.map((person, idx) => (
        <div key={`${person.title}-${idx}`} className={styles.cardWrapper}>
          <h3 className={styles.cardTitle}>{person.name}</h3>
          <div className={styles.cardRoot}>
            <div className={styles.imgContainer}>
              <img src={person.image} className={styles.image} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{person.title}</h3>
              <p className={styles.description}>{person.description}</p>
            </div>
          </div>
        </div>
      ))
    }
    return;
  }

  const _renderPlanItems = () => {
    if (planItems) {
      return planItems.map((item, idx) => (
        <div key={`${item.title}-${idx}`} className={styles.cardRootPlan}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.textKey}>Dates: <span className={styles.description}>{item.dates}</span></p>
          <p className={styles.textKey}>Times: <span className={styles.description}>{item.times}</span></p>
          <p className={styles.textKey}>Description: <span className={styles.description}>{item.description}</span></p>
        </div>
      ))
    }
    return;
  }

  return (
    <div className={styles.cardContainer}>
      {teamItems ? _renderTeamMembers() : _renderPlanItems()}
    </div>
  )
}
