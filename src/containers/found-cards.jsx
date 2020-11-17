import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoadingSpinner from '@components/loading-spinner';
import ErrorIndicator from '@components/error-indicator';

import { findCards, cardAddedToWishlist } from '@actions';
import withScryfallService from '@hoc';
import FoundCards from '@components/found-cards';

export class FoundCardsContainer extends Component {
  componentDidMount() {
    const { location } = this.props;

    this.props.findCards(location.search);
  }

  render() {
    const {
      searchResult,
      loading,
      failure,
    } = this.props;

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

    return (
      <FoundCards
        location={ this.props.location }
        searchResult={ searchResult }
        cardAddedToWishlist={ this.props.cardAddedToWishlist }
      />
    );
  }
}

FoundCardsContainer.propTypes = {
  searchResult: PropTypes.object,
  loading: PropTypes.bool,
  failure: PropTypes.bool,
  findCards: PropTypes.func.isRequired,
  cardAddedToWishlist: PropTypes.func.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = ({ foundCards: { result: searchResult, loading, failure } }) => ({
  searchResult,
  loading,
  failure,
});

const mapDispatchToProps = (dispatch, { scryfallService }) => ({
  findCards: findCards(dispatch, scryfallService),
  cardAddedToWishlist: (cardId) => dispatch(cardAddedToWishlist(cardId)),
});

export default withScryfallService()(
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(FoundCardsContainer),
  ),
);
