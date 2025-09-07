import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  productList: [],
  totalPrice: 0,
};

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.productList.find(
        (el) => el.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          productList: [
            ...state.productList,
            { ...action.payload, userPrice: action.payload.price, count: 1 },
          ],
        };
      }
      return state;
    },
    removeProduct: (state, action) => {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementPrice: (state, action) => {
      const newList = state.productList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1,
            userPrice: item.price * (item.count + 1),
          };
        }
        return item;
      });
      return { ...state, productList: newList };
    },
    decrementPrice: (state, action) => {
      const newList = state.productList.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
            userPrice: item.price * (item.count - 1),
          };
        }
        return item;
      });
      return { ...state, productList: newList };
    },
    calculateTotalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.productList.reduce((a, b) => {
          return a + b.userPrice;
        }, 0),
      };
    },
  },
});

export default productReducer.reducer;

export const {
  addProduct,
  removeProduct,
  incrementPrice,
  decrementPrice,
  calculateTotalPrice,
} = productReducer.actions;
