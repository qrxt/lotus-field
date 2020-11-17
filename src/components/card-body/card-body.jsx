import React, { Suspense } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import reactReplace from 'react-string-replace';

import LoadingSpinner from '@components/loading-spinner';
import ManaCost from '@components/mana-cost';
import ArtImage from '@components/art-image';

import styles from './card-body.css';

const manaCostCode = /\{(.*?)\}/gm;
const manaCostReplacer = (match, index) => (
  <ManaCost
    className={ cn('mana', styles['mana-cost']) }
    symbolCode={ match }
    key={ index }
  />
);

const CardBody = ({ card, className, displayArt }) => {
  const {
    name,
    typeLine: type,
    oracleText: text,
    flavorText,
    manaCost,
  } = card;

  const loadingComponent = (
    <div className="wrapper d-flex justify-content-center">
      <LoadingSpinner />
    </div>
  );

  return (
    <div className={ cn(styles.body, className) } >
      {
        displayArt && <Suspense fallback={ loadingComponent }>
          <ArtImage card={ card } />
        </Suspense>
      }

      <div className={ cn(styles.info, 'col-md-6 col-xl-8') }>
        <div className="wrapper">
          <header className="d-flex flex-wrap align-items-center">
            <h3 className={ styles.title }>
              { name }
            </h3>
            {
              manaCost && <p className={ styles['card-cost'] }>
                { reactReplace(manaCost, manaCostCode, manaCostReplacer) }
              </p>
            }
          </header>
          <div className={ styles['type-line'] }>
            <p className={ styles.type }>
              { type }
            </p>
            {
              card.power && <p className={ styles['creature-characteristics'] }>
                { card.power }/{ card.toughness }
              </p>
            }
          </div>
        </div>
        <div className={ cn('wrapper bg-light', styles['card-texts']) }>
          <p className={ styles.text }>
            { reactReplace(text, manaCostCode, manaCostReplacer) }
          </p>

          {
            flavorText && <p className={ styles.flavor }>
              { flavorText }
            </p>
          }
        </div>
      </div>
    </div>
  );
};

CardBody.propTypes = {
  card: PropTypes.object.isRequired,
  className: PropTypes.string,
  displayArt: PropTypes.bool,
};

CardBody.defaultProps = {
  displayArt: true,
};

export default CardBody;
