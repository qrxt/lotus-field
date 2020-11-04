import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  searchFiltersRefreshed,
  searchFiltersReset,
} from '@actions';
import SearchForm from '@components/search-form';

export class SearchFormContainer extends Component {
  componentDidMount() {
    this.props.onFiltersReset();

    // autocomplete logic will be here
  }

  render() {
    const {
      searchFilters,
      onFiltersReset,
      onFiltersRefresh,
      history,
    } = this.props;

    return <SearchForm
      searchFilters={ searchFilters }
      onFiltersReset={ onFiltersReset }
      onFiltersRefresh={ onFiltersRefresh }
      history={ history }
    />;
  }
}

SearchFormContainer.propTypes = {
  searchFilters: PropTypes.object,
  onFiltersRefresh: PropTypes.func,
  onFiltersReset: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = ({ searchFilters }) => ({ searchFilters });

const mapDispatchToProps = (dispatch) => ({
  onFiltersRefresh: (field, value) => dispatch(searchFiltersRefreshed(field, value)),
  onFiltersReset: () => dispatch(searchFiltersReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SearchFormContainer));
