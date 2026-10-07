import { describe, expect, it } from 'vitest';
import reducer, { addItem, removeItem, updateQuantity, selectCartQuantity } from './CartSlice.jsx';
const snake = { name: 'Snake Plant', cost: '$15', image: 'snake.webp', description: 'Upright foliage.' };
const lavender = { name: 'Lavender', cost: '$20', image: 'lavender.webp', description: 'Fragrant blooms.' };

describe('shopping cart state', () => {
  it('adds unique rows, increments existing plants and derives the total quantity', () => {
    let state = reducer(undefined, addItem(snake));
    state = reducer(state, addItem(snake));
    state = reducer(state, addItem(lavender));
    expect(state.items).toHaveLength(2);
    expect(state.items[0].quantity).toBe(2);
    expect(selectCartQuantity({ cart: state })).toBe(3);
  });
  it('updates quantities while preserving unrelated plants', () => {
    let state = reducer(undefined, addItem(snake));
    state = reducer(state, addItem(lavender));
    state = reducer(state, updateQuantity({ name: snake.name, quantity: 4 }));
    expect(state.items[0].quantity).toBe(4);
    expect(state.items[1].quantity).toBe(1);
    expect(state.items.reduce((sum, item) => sum + Number(item.cost.slice(1)) * item.quantity, 0)).toBe(80);
  });
  it('removes a row at zero and allows adding the plant again', () => {
    let state = reducer(undefined, addItem(snake));
    state = reducer(state, updateQuantity({ name: snake.name, quantity: 0 }));
    expect(state.items).toEqual([]);
    state = reducer(state, addItem(snake));
    expect(state.items[0].quantity).toBe(1);
    expect(reducer(state, removeItem(snake.name)).items).toEqual([]);
  });
  it('ignores invalid quantities and unknown plants', () => {
    const state = reducer(undefined, addItem(snake));
    for (const quantity of [-1, 1.5, NaN, '2']) {
      expect(reducer(state, updateQuantity({ name: snake.name, quantity }))).toEqual(state);
    }
    expect(reducer(state, updateQuantity({ name: 'Unknown', quantity: 2 }))).toEqual(state);
  });
});
