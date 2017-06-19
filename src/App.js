import React, { Component } from 'react'
import TabsWithText from './TabsWithText'
import TabsWithoutText from './TabsWithoutText'
import Typography from 'material-ui/Typography'
import 'typeface-roboto'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Typography type="display1">Roboto:</Typography>
        <TabsWithText />
        <Typography type="display1" style={{paddingTop: 20}}>Helvetica:</Typography>
        <TabsWithoutText />
      </div>
    )
  }
}

export default App
