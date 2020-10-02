import React from 'react';
import { ScryfallServiceConsumer } from '@components/scryfall-service-context';

const withScryfallService = () => (Wrapped) => {
  const WrappedWithScryfall = (props) => (
    <ScryfallServiceConsumer>
      {
        (scryfallService) => (
          <Wrapped { ...props } scryfallService={ scryfallService } />
        )
      }
    </ScryfallServiceConsumer>
  );

  return WrappedWithScryfall;
};

export default withScryfallService;
