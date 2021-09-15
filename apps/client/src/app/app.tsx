import styles from './app.module.scss';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Header } from '@pwa-test/client/ui-shared';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <div className={styles.app}>
        <Header />
        <main>I am your father</main>
      </div>
    </ChakraProvider>
  );
}

export default App;
