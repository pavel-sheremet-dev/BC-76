import { Note, Tag } from "@/types/note";
import axios from "axios";

export const api = axios.create({
  // baseURL: "https://notehub-api.goit.study",
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  withCredentials: true,
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface FetchNotesProps {
  searchText: string;
  page: number;
  tag: "" | Tag;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface UserToUpdate {
  email?: string;
  username?: string;
}
