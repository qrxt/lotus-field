import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ColorIdentityInput from '@components/color-identity-input';

import styles from './search-form.css';

const SearchForm = (props) => {
  const {
    onFiltersRefresh,
    history,
    searchFilters,
  } = props;
  const { t } = useTranslation();

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    history.push(`/cards?q=${searchFilters.queryString}`);
  };

  return (
    <Form onSubmit={ onFormSubmit } className={ 'col-12 col-xl-4 col-lg-6 p-0' }>
      <Form.Group controlId="formSearchCardName">
        <Form.Label>{ t('search-form.name-input.title') }</Form.Label>
        <Form.Control
          type="text"
          placeholder={ t('search-form.name-input.placeholder') }
          onInput={ (evt) => onFiltersRefresh('name', evt.target.value) }
          className={ styles['input-name'] }
        />
        <Form.Check
          custom
          type="checkbox"
          id="name-exact"
          label={ t('search-form.exact-checkbox.title') }
          onChange={ (evt) => onFiltersRefresh('nameExact', evt.target.value) }
          className={ styles.checkbox }
        />
      </Form.Group>

      <Form.Group controlId="formSearchType">
        <Form.Label>{ t('search-form.type-input.title') }</Form.Label>
        <Form.Control
          type="text"
          placeholder={ t('search-form.type-input.placeholder') }
          onInput={ (evt) => onFiltersRefresh('type', evt.target.value) }
        />
      </Form.Group>

      <Form.Group controlId="formSearchText">
        <Form.Label>{ t('search-form.card-text-input.title') }</Form.Label>
        <Form.Control
          type="text"
          placeholder={ t('search-form.card-text-input.placeholder') }
          onInput={ (evt) => onFiltersRefresh('cardText', evt.target.value) }
        />
      </Form.Group>

      <Form.Group controlId="formSearchRarity">
        <Form.Label>{ t('search-form.rarity-select.title') }</Form.Label>
        <Form.Control
          as="select"
          custom
          onChange={
            (evt) => onFiltersRefresh('rarity', evt.target.value.toLowerCase())
          }
        >
          <option>{ t('rarities.any') }</option>
          <option>{ t('rarities.common') }</option>
          <option>{ t('rarities.uncommon') }</option>
          <option>{ t('rarities.rare') }</option>
          <option>{ t('rarities.mythic') }</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formSearchUnique">
        <Form.Label>{ t('search-form.unique-select.title') }</Form.Label>
        <Form.Control
          as="select"
          custom
          onChange={
            (evt) => onFiltersRefresh('unique', evt.target.value.toLowerCase())
          }
        >
          <option>{ t('unique.cards') }</option>
          <option>{ t('unique.art') }</option>
          <option>{ t('unique.prints') }</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formSearchArtist">
        <Form.Label>{ t('search-form.artist-input.title') }</Form.Label>
        <Form.Control
          type="text"
          placeholder={ t('search-form.artist-input.placeholder') }
          onInput={ (evt) => onFiltersRefresh('artist', evt.target.value) }
        />
      </Form.Group>

      <ColorIdentityInput
        className="w-100 mb-3"
        onFiltersRefresh={ onFiltersRefresh }
      />

      <Button
        variant="primary"
        type="submit"
        disabled={ !searchFilters.queryString.length }
      >
        { t('search-form.submit') }
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  searchFilters: PropTypes.object,
  onFiltersRefresh: PropTypes.func,
  history: PropTypes.object,
};

export default SearchForm;
