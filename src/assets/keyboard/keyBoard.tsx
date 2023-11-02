import { Keys } from './keys';

export function Keyboard({ children }: { children: JSX.Element }) {
  return (
    <>
      <main className="phone">
        <div className="keyboard-container">
          <Keys></Keys>
        </div>
        {children}
      </main>
    </>
  );
}
