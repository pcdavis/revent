import React from 'react'
import { Grid } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SettingsNav from '../Settings/SettingsNav'
import AccountPage from '../Settings/AccountPage'
import BasicPage from '../Settings/BasicPage'
import PhotosPage from '../Settings/PhotosPage'
import AboutPage from '../Settings/AboutPage'

const SettingsDashboard = () => {
  return (
    <Grid >
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav/>
      </Grid.Column>
    </Grid>
  )
}

export default SettingsDashboard
