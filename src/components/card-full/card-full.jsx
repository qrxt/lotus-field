import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import reactReplace from 'react-string-replace';
import { useTranslation } from 'react-i18next';
import ModalImage from 'react-modal-image';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ManaCost from '@components/mana-cost';
import Legalities from '@components/legalities';
import Rulings from '@components/rulings';
import styles from './card-full.css';

const manaCostCode = /\{(.*?)\}/gm;
const manaCostReplacer = (match, index) => (
  <ManaCost className={ styles['mana-cost'] } symbolCode={ match } key={ index } />
);

const CardFull = ({ card }) => {
  const {
    name,
    typeLine: type,
    oracleText: text,
    flavorText,
    manaCost,
    legalities,
    rulings,
  } = card;
  const { artCrop, normal: artNormal } = card.imageUris;
  const { t } = useTranslation();

  return (
    <article>
      <ModalImage
        className={ styles.art }
        small={ artCrop }
        large={ artNormal }
        alt={ `Art for "${name}" card` }
      />
      <div className="wrapper">
        <header className="d-flex align-items-center">
          <h3 className={ styles.title }>
            { name }
          </h3>
          <p className={ styles['card-cost'] }>
            { reactReplace(manaCost, manaCostCode, manaCostReplacer) }
          </p>
        </header>
        <p className={ styles.type }>
          { type }
        </p>
      </div>
      <div className={ cn('wrapper bg-light py-2', styles['card-texts']) }>
        <p className={ styles.text }>
          { reactReplace(text, manaCostCode, manaCostReplacer) }
        </p>

        <p className={ styles.flavor }>
          { flavorText }
        </p>
      </div>

      <Accordion>
        <Card className="rounded-0">
          <Card.Header>
            <Accordion.Toggle as={ Button } variant="link" eventKey="0">
              <p className={ styles['additional-caption'] }>
                { t('pages.card.legalities') }
              </p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Legalities legalitiesList={ legalities } />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="rounded-0">
          <Card.Header>
            <Accordion.Toggle as={ Button } variant="link" eventKey="1">
              <p className={ styles['additional-caption'] }>
                { t('pages.card.rulings') }
              </p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Rulings rulings={ rulings } />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </article>
  );
};

CardFull.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardFull;
