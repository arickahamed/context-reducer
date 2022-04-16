import { useContext } from 'react';
import './App.css';
import CreateContext from './components/context/CreateContext';
import First from './components/First';

function App() {
  const {state} = useContext(CreateContext);
  const {post, loading, error} = state;
  // console.log(post);

  const style = {
    color: "red"
  };

  return (
    <div>
      <First />
      <div>
      <h1>Complex Counter LWS</h1>
      <h3 style={style}>Title : {state.loading ? loading : post.title}</h3>
        {error || null}
      </div>
    </div>
  );
}

export default App;
