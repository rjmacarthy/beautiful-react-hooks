import { cleanup, renderHook } from '@testing-library/react-hooks';
import useValueHistory from './useValueHistory';

describe('useValueHistory', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useValueHistory).to.be.a('function');
    expect(useValueHistory.prototype).to.be.empty;
  });

  it('should return an array', () => {
    const { result } = renderHook(() => useValueHistory(10));

    expect(result.current).to.be.an('array');
  });

  it('should return the history of the given value', () => {
    const { result, rerender } = renderHook((value) => useValueHistory(value), { initialProps: 1 });

    rerender(2);
    rerender(3);

    expect(result.current).to.deep.equal([1, 2, 3]);
  });
});
