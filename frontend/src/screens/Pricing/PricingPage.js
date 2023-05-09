import React from 'react';
import { Card } from '../../components/card/Card';
import styles from './pricingPage.module.scss';

function Plan(title, dates, times, description) {
  this.title = title;
  this.dates = dates;
  this.times = times;
  this.description = description;
}

const PricingPage = () => {
  const childPlan = new Plan('3-8yrs', 'Mon-Thurs', '4pm-6pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');
  const youthPlan = new Plan('3-8yrs', 'Mon-Thurs', '4pm-6pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');
  const adultPlan = new Plan('3-8yrs', 'Mon-Thurs', '4pm-6pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');
  const familyPlan = new Plan('3-8yrs', 'Mon-Thurs', '4pm-6pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');

  const plans = [childPlan, youthPlan, adultPlan, familyPlan];

  return (
    <div id={'pricing'} className={styles.pricingPageContainer}>
      <h2>Plans & Pricing</h2>
      <Card planItems={plans} />
    </div>
  )
}

export default PricingPage;