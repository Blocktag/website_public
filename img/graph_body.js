import React, {Fragment} from 'react';

export default class GraphBody extends React.Component {
  // resolution in x and y directions
  static defaultProps = { resolution: [100, 100] };

  constructor(props) {
    super(props);
    this.state = {
      lgid: Math.random()
    }
  }

  preparePolygon() {
    // [right top, right btm, left bottom, otherpoints...]
    let points = [`${this.props.x+this.props.width},${this.props.y-this.props.height} ${this.props.x+this.props.width},${this.props.y} ${this.props.x},${this.props.y}`];

    let collector = this.props.data.map(coord => {
      const [x, y] = this.props.coordsToSvgCoords(coord)
      return ` ${x},${y}`;
    });

    return points.concat(collector).join(' ')
  }

  render() {
    let points = this.preparePolygon()

    // For partial fill up to the mean
    const [mean, start, end] = [this.props.data.mean, this.props.data[0][0], this.props.data[this.props.data.length-1][0]]
    let perc = (mean-start)/(end-start) * 100

    // translucent overlay for fun effects
    return(
      <Fragment>
        <linearGradient id={this.state.lgid} x1={0} y1={0} x2={1} y2={0}>
          <stop offset="0%" stopOpacity="0" stopColor="white"/>
          <stop offset={`${perc}%`} stopOpacity="0" stopColor="white"/>
          <stop offset={`${perc}%`} stopOpacity=".2" stopColor="white"/>
          <stop offset="100%" stopOpacity=".2" stopColor="white"/>
        </linearGradient>
        <polygon points={points} />
        <polygon fill={`url(#${this.state.lgid})`} points={points} />
      </Fragment>
      )
  }
}
