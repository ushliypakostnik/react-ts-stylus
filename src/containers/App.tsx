import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";

import { connect } from 'react-redux';
import { StoreType } from '../store/types';

const StepForm : React.SFC = () => {
  return (
    <h1>Step Form Here</h1>
  );
};

const Page404 : React.SFC = () => {
  return (
    <h1>404: Page Not Found!</h1>
  );
};

interface Props {
};

const initialState = {
};

type State = Readonly<typeof initialState>;

class App extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
  });

  readonly state : State = initialState;

  public render() {
    return (
      <Switch>
        <Route exact path="/" component={ StepForm } />
        <Route component={ Page404 } />
      </Switch>
    );
  }
};

const mapStateToProps = (state : StoreType) : State => ({
});

export default connect(null, null)(App);
