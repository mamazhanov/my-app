import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Direct from './components/Direct/Direct';
import Header from './components/Header/Header';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="wrapper-content">
        <div className="container">
          <Route path="/profile" render={() =>
            <Profile state={props.state.profilePage}
              dispatch={props.dispatch} />
          } />
          <Route path="/direct" render={() =>
            <Direct state={props.state.directPage}
              dispatch={props.dispatch} />
          } />
          <Route path="/news" component={News} />
        </div>
      </div>

    </div>
  );
}

export default App;
