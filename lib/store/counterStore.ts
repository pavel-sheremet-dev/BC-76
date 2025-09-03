import { create } from "zustand";

interface CounterStore {
  counter: number;
  bears: number;
  increment: (value: number) => void;
  incrementBears: () => void;
}

export const useCounterStore = create<CounterStore>()((set) => ({
  counter: 0,
  bears: 0,
  increment: (value) =>
    set((prevState) => ({
      counter: prevState.counter + value,
    })),
  incrementBears: () => set((prev) => ({ bears: prev.bears + 1 })),
}));

// const useCounterStore = create<CounterStore>((set) => {
//   return {
//     counter: 0,
//     increment: () => {
//       set((prevState) => {
//         return {
//           counter: prevState.counter + 1,
//         };
//       });
//     },
//   };
// });
