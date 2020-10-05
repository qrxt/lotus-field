import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingSpinner from '@components/loading-spinner';
import ErrorIndicator from '@components/error-indicator';

import { cardFetch } from '@actions';
import withScryfallService from '@hoc/withScryfallService.jsx';
import CardFull from '@components/card-full';

class CardFullContainer extends Component {
  componentDidMount() {
    const { cardId } = this.props;
    this.props.cardFetch(cardId);
  }

  render() {
    const { card, loading, failure } = this.props;

    if (loading) {
      return (
        <div className="d-flex justify-content-center">
          <LoadingSpinner />
        </div>
      );
    }

    if (failure) {
      return (
        <div className="d-flex justify-content-center">
          <ErrorIndicator />
        </div>
      );
    }

    return <CardFull card={ card } />;
  }
}

CardFullContainer.propTypes = {
  cardId: PropTypes.string.isRequired,
  card: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  failure: PropTypes.bool.isRequired,
  cardFetch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ card, loading, failure }) => ({
  card,
  loading,
  failure,
});

const mapDispatchToProps = (dispatch, { scryfallService }) => ({
  cardFetch: cardFetch(dispatch, scryfallService),
});

export default withScryfallService()(
  connect(mapStateToProps, mapDispatchToProps)(CardFullContainer),
);
