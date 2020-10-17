import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  searchFiltersRefreshed,
} from '@actions';
import SearchForm from '@components/search-form';

class SearchFormContainer extends Component {
  componentDidMount() {
    // const { cardIdList } = this.props;
    // this.props.recentCardsFetch(cardIdList);

    // autocomplete logic will be here
  }

  render() {
    const {
      searchFilters,
      onFiltersRefresh,
      history,
    } = this.props;

    return <SearchForm
      searchFilters={ searchFilters }
      onFiltersRefresh={ onFiltersRefresh }
      history={ history }
    />;
  }
}

SearchFormContainer.propTypes = {
  searchFilters: PropTypes.object,
  onFiltersRefresh: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = ({ searchFilters }) => ({ searchFilters });

const mapDispatchToProps = (dispatch) => ({
  onFiltersRefresh: (field, value) => (
    dispatch(searchFiltersRefreshed(field, value))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SearchFormContainer));
