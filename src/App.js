import Question from './components/Question';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Weekly Expense</h1>

        <div className="principal-content content">
          <Question />
        </div>
      </header>
    </div>
  );
}

export default App;
