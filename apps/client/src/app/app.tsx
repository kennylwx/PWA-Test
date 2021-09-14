import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Luke!</h1>
      </header>
      <main>I am your father</main>
    </div>
  );
}

export default App;
