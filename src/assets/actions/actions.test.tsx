import { render } from '@testing-library/react';
import { Info } from '../info/info';
import { Actions } from './actions';

describe('Given the Action component', () => {
  let elements: HTMLElement[];
  let phone: string;
  beforeEach(() => {
    render(
      <Actions>
        <Info></Info>
      </Actions>
    );
    elements = [
      ...screen.getAllByRole('button'),
      screen.getByText('Calling...'),
    ];
    phone = '231';
  });
});
