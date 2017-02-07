import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { Link } from 'react-router';


class Track extends Component {

  constructor() {
    super();

    this.state = {
      // What if player starts at e.g. track nr3? FIX!
      tracks: {1: 0},
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.tracks[nextProps.params.trackNumber])
      this.setTrackScore(nextProps.params.trackNumber, 0);
  }

  render() {
    const trackNr = this.props.params.trackNumber;
    return (
      <div>
        <RaisedButton
          label="End game"
          containerElement={ <Link to="/result/" /> }
        />
        <h1>Hole { trackNr }</h1>
        <div>
          <FloatingActionButton
            onClick={() => this.setTrackScore(trackNr, (this.state.tracks[trackNr] - 1)) }
          >
            <ContentRemove />
          </FloatingActionButton>
          <h1>{ this.state.tracks[trackNr] }</h1>
          <FloatingActionButton
            onClick={() => this.setTrackScore(trackNr, (this.state.tracks[trackNr] + 1)) }
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        {this.p}
        { (Number(this.props.params.trackNumber) > 1) &&
          <RaisedButton
            label="Prev"
            primary={ true }
            containerElement={ <Link to={ "/track/" + (Number(this.props.params.trackNumber) - 1) } /> }
          />
        }
        
        <RaisedButton
          label="Next"
          secondary={ true }
          containerElement={ <Link to={ "/track/" + (Number(this.props.params.trackNumber) + 1) } /> }
        />
      </div>
    );
  }

  setTrackScore(track, score) {
    var tracks = this.state.tracks;
    tracks[track] = score;
    
    this.setState({
      tracks,
    })
  }
}

export default Track;