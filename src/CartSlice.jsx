import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name,image,cost}=action.payload;
        const existingItem=state.items.find(item => item.name===name)
        if(existingItem){
            // if the item already exists in the cart
            existingItem.quatity++;
        }else{
            // add the item for the very first time
            state.items.push({name,image,cost,quantity:1}); 
        }

  
    
    },
    removeItem: (state, action) => {
        
        const existingItem=state.items.find(item =>item.name===action.payload);
        if(existingItem){
            state.items=state.items.filter((item)=>item.name != action.payload);
        }
    },
    updateQuantity: (state, action) => {
        const {name,quantity}=action.payload;

        const itemToUpdate=state.items.find(item =>item.name===name);
        if(itemToUpdate){
            itemToUpdate.quantity=quantity;
        }


    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
