import './App.css';
import Section from './components/section/section';
import back1 from './assets/back1.jpg';
import back2 from './assets/back2.jpg';
import back3 from './assets/back3.jpg';

function App() {
  return (
    <div className="App">
      <Section imageuri={back1}>
        <h1>React 18 Alpha</h1>
      </Section>

      <Section imageuri={back2}>
        <div>
          <h1>Hello world</h1>
        </div>
      </Section>

      <Section imageuri={back3}>
        <div>
          <h1>Hello world</h1>
        </div>
      </Section>
    </div>
  );
}

export default App;
