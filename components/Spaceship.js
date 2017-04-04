import React from 'react'

class Spaceship extends React.Component {
  render (){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets? "Yes" : "No"}</p>
        <p>{this.props.colors.join(", ")}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ["black", "red"]
}

export default Spaceship
