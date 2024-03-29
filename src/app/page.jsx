import Results from '@/components/Results';
import Search from '@/components/Search';
import styles from './page.module.css';
import CharactersProvider from '@/state/characters/Provider';
import { getCharacters } from '@/api';
import getServerSideQueryParams from '@/utils/getServerSideQueryParams';

export default async function Page() {
  return (
    <CharactersProvider
      initialState={await getCharacters(undefined, getServerSideQueryParams())}
    >
      <main className={styles.main}>
        <Search />
        <Results />
      </main>
    </CharactersProvider>
  );
}
