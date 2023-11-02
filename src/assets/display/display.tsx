import { useContext } from 'react';
import { AppContext } from '../constext/context';

export function Display() {
  const { phone } = useContext(AppContext);

  return <span className="number">{phone}</span>;
}
