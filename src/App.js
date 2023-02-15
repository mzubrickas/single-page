
import Categories from './components/Categories';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Header from './components/Header';
import Learning from './components/Learning';
import Possibilities from './components/Possibilities';
import Rights from './components/Rights';
import './styles/global.scss'


function App() {
  return (
    <div className="App">
      <Header />
      <Greetings />
      <Courses />
      <Possibilities />
      <Learning />
      <Categories />
      <Footer />
      <Rights />
    </div>
  );
}

export default App;
