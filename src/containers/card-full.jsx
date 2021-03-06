import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoadingSpinner from '@components/loading-spinner';
import ErrorIndicator from '@components/error-indicator';

import {
  cardFetch,
  cardAddedToRecent,
  cardAddedToWishlist,
  cardRemovedFromWishlist,
} from '@actions';
import withScryfallService from '@hoc';
import CardFull from '@components/card-full';

export class CardFullContainer extends Component {
  componentDidMount() {
    const { cardId, history } = this.props;

    this.props.cardFetch(cardId)
      .then(() => {
        const { card } = this.props;

        this.props.cardAddedToRecent(card.id);
        history.push(`/card/${card.id}`);
      });
  }

  render() {
    const {
      card,
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

    return <CardFull
      card={ card }
      wishlistCardIds={ this.props.wishlistCardIds }
      cardAddedToWishlist={ this.props.cardAddedToWishlist }
      cardRemovedFromWishlist={ this.props.cardRemovedFromWishlist }
    />;
  }
}

CardFullContainer.propTypes = {
  cardId: PropTypes.string.isRequired,
  card: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  failure: PropTypes.bool.isRequired,
  cardFetch: PropTypes.func.isRequired,
  cardAddedToRecent: PropTypes.func.isRequired,
  cardAddedToWishlist: PropTypes.func.isRequired,
  cardRemovedFromWishlist: PropTypes.func.isRequired,
  history: PropTypes.object,
  wishlistCardIds: PropTypes.array,
};

const mapStateToProps = ({ singleCard: { card, loading, failure }, wishlist: { cardIds } }) => ({
  card,
  loading,
  failure,
  wishlistCardIds: cardIds,
});

const mapDispatchToProps = (dispatch, { scryfallService }) => ({
  cardFetch: cardFetch(dispatch, scryfallService),
  cardAddedToRecent: (cardId) => dispatch(cardAddedToRecent(cardId)),
  cardAddedToWishlist: (cardId) => dispatch(cardAddedToWishlist(cardId)),
  cardRemovedFromWishlist: (cardId) => dispatch(cardRemovedFromWishlist(cardId)),
});

export default withScryfallService()(
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(CardFullContainer),
  ),
);
