import React from 'react';
import PropTypes from 'prop-types';
import InterestParagraph from './InterestParagraph';
import {v4} from 'uuid';
import Dialog from 'react-toolbox/lib/dialog';
import {Button} from 'react-toolbox/lib/button';
// import {InterestStyles} from '../css/styles';

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
    let moreIndecater = '..';
    if(this.props.notes.length==1){
      moreIndecater = '';
    }
    return (
      <div style={{cursor: 'pointer'}} onClick={this.handleToggle}>
        <Button style={{fontWeight: 'bold', fontSize: '18px'}} label={this.props.regard}/>
        <p>{this.props.notes[0]+moreIndecater}</p>
        <Dialog
            actions={this.actions}
            active={this.state.active}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title={this.props.regard}
          >
            <div>
              {this.props.notes.map((note) =>
                <InterestParagraph
                note={note}
                key={v4()}
                />
              )}
            </div>
        </Dialog>
      </div>
    );
  }
}

Interest.propTypes = {
  regard: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Interest;
