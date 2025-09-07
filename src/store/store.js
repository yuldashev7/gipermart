import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product-reducer';
import { loadState, saveState } from '../config/data/sotage';
import {
  createListenerMiddleware,
  isAnyOf,
  createAction,
} from '@reduxjs/toolkit';
import {
  incrementPrice,
  decrementPrice,
  addProduct,
  removeProduct,
} from './product-reducer';
import { calculateTotalPrice } from './product-reducer';

const productMiddleware = createListenerMiddleware();

productMiddleware.startListening({
  matcher: isAnyOf(incrementPrice, decrementPrice, addProduct, removeProduct),
  effect: (_, api) => {
    api.dispatch(calculateTotalPrice());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState: {
    product: loadState('product') || {
      count: 0,
      productList: [],
      totalPrice: 0,
    },
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(productMiddleware.middleware),
});

store.subscribe(() => {
  saveState('product', store.getState().product);
});
