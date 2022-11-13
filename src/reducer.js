export const initialState = {
    basket: [
        {
            id: "1235",
            title: "Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate",
            price: 9499.0,
            image: "https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg",
            rating: 4,
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                //item exists, remove it
                newBasket.splice(index, 1);
            } else {
                console.log("connot remove item");
            }

            return { ...state, basket: newBasket };

        default:
            return state;
    }
}

export default reducer;
