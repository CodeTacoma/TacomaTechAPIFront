import React from 'react'
import ExpansionPanelComponent from './ExpansionPanelComponent'

export default class Home extends React.Component {
  render() {
    return(
      <div className="allCardContainer">
        <h1>Tacoma's Tech Ecosystem</h1>
        <ExpansionPanelComponent /> 
      </div>
    )
  }
}