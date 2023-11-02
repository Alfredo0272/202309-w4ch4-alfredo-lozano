import { Keyboard } from '../keyboard/keyBoard';
import { Display } from '../display/display';
import { Info } from '../info/info';
import { Actions } from '../actions/actions';
import { AppContextProvider } from '../constext/phoneContextProvider';

export function App() {
  return (
    <div className="container">
      <Info></Info>
      <AppContextProvider>
        <Keyboard>
          <Actions>
            <Display></Display>
          </Actions>
        </Keyboard>
      </AppContextProvider>
    </div>
  );
}
