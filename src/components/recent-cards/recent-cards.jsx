import React from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';

// import styles from './recent-cards.css';

const RecentCards = ({ cards }) => (
  <ul>
  {
    cards.map((card, idx) => (
      <li key={ idx }>
        { card.name }
      </li>
    ))
  }
  </ul>
);

RecentCards.propTypes = {
  cards: PropTypes.object.isRequired,
};

export default RecentCards;
