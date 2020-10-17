import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingSpinner from '@components/loading-spinner';
import ErrorIndicator from '@components/error-indicator';

import { recentCardsFetch } from '@actions';
import withScryfallService from '@hoc/withScryfallService.jsx';
import RecentCards from '@components/recent-cards';

class RecentCardsContainer extends Component {
  componentDidMount() {
    const { cardIdList } = this.props;

    this.props.recentCardsFetch(cardIdList);
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

    return <RecentCards cards={ cards } />;
  }
}

RecentCardsContainer.propTypes = {
  cardIdList: PropTypes.array.isRequired,
  recentCardsFetch: PropTypes.func.isRequired,
  cards: PropTypes.array,
  loading: PropTypes.bool,
  failure: PropTypes.bool,
};

const mapStateToProps = ({
  recentCards: {
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
  recentCardsFetch: recentCardsFetch(dispatch, scryfallService),
});

export default withScryfallService()(
  connect(mapStateToProps, mapDispatchToProps)(RecentCardsContainer),
);
