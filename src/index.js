import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Loadable from 'react-loadable';
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from './store/index';

/**
 * Layouts
 */
import DefaultLayout from './layouts/Default';

/**
 * Styles & Assets
 */
import './index.css';

/**
 * Features
 */
import HomeFeature from './features/Home';

/**
 * Components
 */
import FeatureLoadingComponent from './components/FeatureLoadingComponent'

const history = createHistory();


const LinodesFeature = Loadable({
  loader: () => import('./features/Linodes/'),
  loading: FeatureLoadingComponent
});

const DomainsFeature = Loadable({
  loader: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(import('./features/Domains'));
    }, 3000)
  }),
  loading: FeatureLoadingComponent
});

const SupportFeature = Loadable({
  loader: () => import('./features/Support'),
  loading: FeatureLoadingComponent
});

const NodeBalancersFeature = Loadable({
  loader: () => import('./features/NodeBalancers'),
  loading: FeatureLoadingComponent
});

const StackScriptsFeature = Loadable({
  loader: () => import('./features/StackScripts'),
  loading: FeatureLoadingComponent
});

const ImagesFeature = Loadable({
  loader: () => import('./features/Images'),
  loading: FeatureLoadingComponent
});

const VolumesFeature = Loadable({
  loader: () => import('./features/Volumes'),
  loading: FeatureLoadingComponent
});

const ProfileFeature = Loadable({
  loader: () => import('./features/Profile'),
  loading: FeatureLoadingComponent
});

const SettingsFeature = Loadable({
  loader: () => import('./features/Settings'),
  loading: FeatureLoadingComponent
});

const BillingFeature = Loadable({
  loader: () => import('./features/Billing'),
  loading: FeatureLoadingComponent
});

const UsersFeature = Loadable({
  loader: () => import('./features/Users'),
  loading: FeatureLoadingComponent
});

ReactDOM.render(
  <Provider store={store(history)}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <DefaultLayout exact path="/" component={HomeFeature} />
          <DefaultLayout path="/linodes" component={LinodesFeature} />
          <DefaultLayout path="/images" component={ImagesFeature} />
          <DefaultLayout path="/stackscripts" component={StackScriptsFeature} />
          <DefaultLayout path="/volumes" component={VolumesFeature} />
          <DefaultLayout path="/nodebalancers" component={NodeBalancersFeature} />
          <DefaultLayout path="/domains" component={DomainsFeature} />
          <DefaultLayout path="/support" component={SupportFeature} />
          <DefaultLayout path="/profile" component={ProfileFeature} />
          <DefaultLayout path="/settings" component={SettingsFeature} />
          <DefaultLayout path="/billing" component={BillingFeature} />
          <DefaultLayout path="/users" component={UsersFeature} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);