import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const SettingsPage = () => {
  const { t, i18n } = useTranslation();

  const languageCodesMapping = {
    Русский: 'ru',
    English: 'en',
  };

  const onLangChange = (evt) => {
    const { value } = evt.target;
    const langCode = languageCodesMapping[value];

    i18n.changeLanguage(langCode);
  };

  return (
    <section>
      <h2 className="visually-hidden">
        { t('pages.settings.h2') }
      </h2>

      <div className="wrapper">
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>{ t('pages.settings.language.title') }</Form.Label>
            <Form.Control as="select" onChange={ onLangChange } custom>
              <option>English</option>
              <option>Русский</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </section>
  );
};

export default SettingsPage;
