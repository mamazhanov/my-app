import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DirectContainer from './components/Direct/DirectContainer';
import Header from './components/Header/Header';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="wrapper-content">
        <div className="container">
          <Route path="/profile" render={() =>
            <ProfileContainer store={props.store} />
          } />
          <Route path="/direct" render={() =>
            <DirectContainer store={props.store} />
          } />
          <Route path="/news" component={News} />
        </div>
      </div>

    </div>
  );
}

export default App;
