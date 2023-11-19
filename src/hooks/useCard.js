import { create } from 'zustand'

const useCard = create((set) => ({
  productList: [],
  addProduct: (id) =>
    set((state) => ({
      ...state,
      productList: [...state.productList, { id: Number(id), quantity: 1 }],
    })),
  removeProduct: (id) =>
    set((state) => ({
      ...state,
      productList: state.productList.filter((prod) => prod.id !== Number(id)),
    })),
  increaseQuantity: (id) =>
    set((state) => ({
      ...state,
      productList: state.productList.map((prod) =>
        prod.id === Number(id) ? { ...prod, quantity: prod.quantity + 1 } : prod
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      ...state,
      productList: (() => {
        const product = state.productList.find((prod) => prod.id === Number(id))
        if (product.quantity === 1) {
          return state.productList.filter((prod) => prod.id !== Number(id))
        }
        return state.productList.map((prod) =>
          prod.id === Number(id) ? { ...prod, quantity: prod.quantity - 1 } : prod
        )
      })(),
    })),
}))

export default useCard
