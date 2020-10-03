import React from 'react';
import PropTypes from 'prop-types';
import FeaturesNav from '@components/features-nav';
import { useTranslation } from 'react-i18next';

const RandomCardPage = (props) => {
  const { card } = props;
  const { t } = useTranslation();

  return (
    <section>
      {/* <h2 className="visually-hidden">
        { t('pages.main.h2') }
      </h2> */}
      <p>some card info</p>
    </section>
  );
};

RandomCardPage.propTypes = {
  props: PropTypes.object,
};

export default RandomCardPage;
