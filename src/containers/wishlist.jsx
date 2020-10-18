import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingSpinner from '@components/loading-spinner';
import ErrorIndicator from '@components/error-indicator';

import { wishlistFetch } from '@actions';
import { withScryfallService } from '@hoc';
import Wishlist from '@components/wishlist';

class WishlistContainer extends Component {
  componentDidMount() {
    const { cardIdList } = this.props;

    console.log(cardIdList);

    this.props.wishlistFetch(cardIdList);
  }

  render() {
    const {
      cards,
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

    return <Wishlist cards={ cards } />;
  }
}

WishlistContainer.propTypes = {
  cardIdList: PropTypes.array.isRequired,
  wishlistFetch: PropTypes.func.isRequired,
  cards: PropTypes.array,
  loading: PropTypes.bool,
  failure: PropTypes.bool,
};

const mapStateToProps = ({
  wishlist: {
    cardsLoaded,
    cardIds,
    loading,
    failure,
  },
}) => ({
  cardIdList: cardIds,
  cards: cardsLoaded,
  loading,
  failure,
});

const mapDispatchToProps = (dispatch, { scryfallService }) => ({
  wishlistFetch: wishlistFetch(dispatch, scryfallService),
});

export default withScryfallService()(
  connect(mapStateToProps, mapDispatchToProps)(
    WishlistContainer,
  ),
);
