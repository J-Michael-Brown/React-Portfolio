import React from 'react';
import PropTypes from 'prop-types';
import InterestParagraph from './InterestParagraph';
import {v4} from 'uuid';
import Dialog from 'react-toolbox/lib/dialog';

class Interest extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      actions: [{ label: 'Done', onClick: this.handleToggle }]

    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({active: !this.state.active});
  }
  render() {
    return (
      <div>
      <h4>{this.props.regard}</h4>
      {this.props.notes.map((note) =>
        <InterestParagraph
        note={note}
        key={v4()}
        />
      )}
      </div>
    );
  }
}

Interest.propTypes = {
  regard: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Interest;
