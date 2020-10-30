import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import CardBody from './card-body.jsx';

const cardBody = {
  name: 'Uro',
  typeLine: 'Legendary Creature - Elder Giant',
  oracleText: 'When Uro enters the battlefield, sacrifice it unless it escaped.',
  flavorText: 'Oh no, i have been banned',
  manaCost: '{1}{G}{U}',
  power: 6,
  toughness: 6,

  imageUris: {
    artCrop: 'placeholder link for cropped art image',
    artNormal: 'placeholder link for normal art image',
  },
};

describe('Card Body', () => {
  test('should render correctly', () => {
    const { getByText } = render(
      <Suspense fallback="asdasd">
        <CardBody card={ cardBody }/>
      </Suspense>,
    );

    // check title text
    expect(getByText('Uro')).toBeInTheDocument();
    // check type line text
    expect(getByText('Legendary Creature - Elder Giant')).toBeInTheDocument();
    // check flavor text
    expect(getByText('Oh no, i have been banned')).toBeInTheDocument();
    // check that mana cost text is replaced by images

    // check toughness and power are correct
    expect(getByText('6/6')).toBeInTheDocument();

    // debug();

    // console.log(ArtImage);
  });
});
