import React from 'react';
import styles from './teamPage.module.scss';
import { Card } from '../../components/card/Card';

function Team(name, title, image, description) {
  this.name = name;
  this.title = title;
  this.image = image;
  this.description = description;
}

const TeamPage = () => {
  const member1 = new Team('John Quinene', 'Professor', './images/person1.jpg', 'John is a Black Belt under 6th Degree Black Belt Marcelo Alonso. He is also an avid competitor and is on the rise as one of the future BJJ stars in the PNW.');
  const member2 = new Team('Bruce Lee', 'Professor', './images/person2.jpg', 'John is a Black Belt under 6th Degree Black Belt Marcelo Alonso. He is also an avid competitor and is on the rise as one of the future BJJ stars in the PNW.');
  const member3 = new Team('Jared Taitingfong', 'Professor', './images/person1.jpg', 'John is a Black Belt under 6th Degree Black Belt Marcelo Alonso. He is also an avid competitor and is on the rise as one of the future BJJ stars in the PNW.');
  const member4 = new Team('Elvira Lujan', 'Coach', './images/person2.jpg', 'John is a Black Belt under 6th Degree Black Belt Marcelo Alonso. He is also an avid competitor and is on the rise as one of the future BJJ stars in the PNW.');

  const teamMembers = [member1, member2, member3, member4];

  return (
    <div id={'team'} className={styles.teamPageContainer}>
      <h2>Meet the team</h2>
      <Card teamItems={teamMembers} />
    </div>
  );
}

export default TeamPage;