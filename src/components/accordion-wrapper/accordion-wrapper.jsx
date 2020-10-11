import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AccordionWrapper = ({ entries }) => (
  <Accordion>
    {
      entries.map(({ caption, body }, index) => (
        <Card className="rounded-0" key={ index }>
          <Card.Header>
            <Accordion.Toggle as={ Button } variant="link" eventKey={ String(index) }>
              { caption }
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={ String(index) }>
            <Card.Body>
              { body }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))
    }
  </Accordion>
);

AccordionWrapper.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default AccordionWrapper;