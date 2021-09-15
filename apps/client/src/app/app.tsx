import styles from './app.module.scss';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Header } from '@pwa-test/client/ui-shared';
import { ChakraProvider } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { UserType } from '@pwa-test/types';

const ALL_USER_QUERY = gql`
  {
    users {
      name
      age
      hairstyle {
        texture
        length
        color
      }
    }
  }
`;

export function App() {
  const { data, loading, error } = useQuery(ALL_USER_QUERY);

  useEffect(() => {
    if (data !== undefined) console.log(data.users);
  }, [data]);

  const displayUsers = () => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (data.users || []).map((d: UserType, i: number) => {
      return <div key={`${i}`}>{d.name}</div>;
    });
  };

  return (
    <ChakraProvider>
      <div className={styles.app}>
        <Header />
        <main>{displayUsers()}</main>
      </div>
    </ChakraProvider>
  );
}

export default App;
