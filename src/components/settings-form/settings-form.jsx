import React from 'react';
import { useTranslation } from 'react-i18next';
import flipObject from '@utils/flip-object';

import Form from 'react-bootstrap/Form';

const languageToCodeMapping = {
  Русский: 'ru',
  English: 'en',
};

const codeToLanguageMapping = flipObject(languageToCodeMapping);

const SettingsForm = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.slice(0, 2);

  const onLangChange = (evt) => {
    const { value } = evt.target;
    const langCode = languageToCodeMapping[value];

    i18n.changeLanguage(langCode);
  };

  return (
    <div className="col-12 col-lg-6 col-xl-4 p-0">
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>{ t('pages.settings.language.title') }</Form.Label>
          <Form.Control
            as="select"
            onChange={ onLangChange }
            defaultValue={ codeToLanguageMapping[currentLang] }
            custom
          >
            <option>English</option>
            <option>Русский</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SettingsForm;
