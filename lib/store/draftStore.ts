import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TextFormValue {
  username: string;
  text: string;
}

interface DraftStore {
  draft: TextFormValue;
  setDraft: (updatedDraft: TextFormValue) => void;
  clearDraft: () => void;
}

const initialDraft: TextFormValue = { username: "", text: "" };

export const useDraftStore = create<DraftStore>()(
  persist(
    (set) => {
      return {
        draft: initialDraft,
        setDraft: (updatedDraft) => set(() => ({ draft: updatedDraft })),
        clearDraft: () => set(() => ({ draft: initialDraft })),
      };
    },
    {
      name: "draft-key",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);

export const useDraftHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubHydrate = useDraftStore.persist.onHydrate(() =>
      setHydrated(false)
    );

    const unsubFinishHydration = useDraftStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );

    setHydrated(useDraftStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};
