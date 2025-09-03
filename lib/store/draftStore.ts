import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Draft {
  text: string;
}

interface DraftStore {
  draft: Draft;
  bears: number;
  setDraft: (updatedDraft: Draft) => void;
  clearDraft: VoidFunction;
}

const initialDraft: Draft = {
  text: "",
};

export const useDraftStore = create<DraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      bears: 0,
      setDraft: (updatedDraft) => {
        set(() => ({
          draft: updatedDraft,
        }));
      },
      clearDraft: () => {
        set(() => ({ draft: initialDraft }));
      },
    }),
    {
      name: "draft-key",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
