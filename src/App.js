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
              addPost={props.addPost}
              updateNewImage={props.updateNewImage}
              updateNewComment={props.updateNewComment} />
          } />
          <Route path="/direct" render={() =>
            <Direct state={props.state.directPage}
              addMessage={props.addMessage}
              updateNewMessage={props.updateNewMessage} />
          } />
          <Route path="/news" component={News} />
        </div>
      </div>

    </div>
  );
}

export default App;
