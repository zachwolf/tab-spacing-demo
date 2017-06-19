import React, { Component } from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import PropTypes from 'prop-types'
import { createStyleSheet, withStyles } from 'material-ui/styles'

const stylesheet = createStyleSheet('TabsWithText', {
  label: {
    fontFamily: 'Helvetica !important'
  }
})

class TabsWithText extends Component {
  state = {
    tabs1ActiveIndex: 0,
    tabs2ActiveIndex: 0
  }
  
  render () {
    return (
      <div>
        <Tabs
          index={this.state.tabs1ActiveIndex}
          onChange={(e, key) => this.setState({tabs1ActiveIndex: key})}
        >
          <Tab classes={{
            label: this.props.classes.label
          }} label="wiwiwiw" />
          <Tab classes={{
            label: this.props.classes.label
          }} label="Tab 2" />
        </Tabs>
        <Tabs
          index={this.state.tabs2ActiveIndex}
          onChange={(e, key) => this.setState({tabs2ActiveIndex: key})}
        >
          <Tab classes={{
            label: this.props.classes.label
          }} label="testing long tab name" />
          <Tab classes={{
            label: this.props.classes.label
          }} label="Tab 2" />
        </Tabs>
      </div>
    )
  }
}

TabsWithText.propTypes = {}

TabsWithText.defaultProps = {}

export default withStyles(stylesheet)(TabsWithText)
