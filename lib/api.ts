import axios from "axios";
import { Note, NewNote, Tag } from "@/types/note";
import { AuthUser } from "@/types/user";

const api = axios.create({
  baseURL: "https://notehub-api.goit.study",
  withCredentials: true,
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesProps {
  searchText: string;
  page: number;
  tag: "" | Tag;
}

export interface Credentials {
  email: string;
  password: string;
}

// register

export const register = async (credentials: Credentials) => {
  const { data } = await api.post<AuthUser>("/auth/register", credentials);

  return data;
};

// login

export const login = async (credentials: Credentials) => {
  const { data } = await api.post<AuthUser>("/auth/login", credentials);

  return data;
};

// logout

export const logout = async () => {
  await api.post<void>("/auth/logout");
};

export const fetchNotes = async ({
  page,
  searchText,
  tag,
}: FetchNotesProps) => {
  const response = await api.get<FetchNotesResponse>("/notes", {
    params: {
      search: searchText,
      page,
      perPage: 12,
      ...(tag !== "" ? { tag } : {}),
    },
  });
  return response.data;
};

// checkSession

export const checkSession = async () => {
  const { data } = await api.get<{ message: string }>("/auth/session");
  return data;
};

//  getUser

export const getUser = async () => {
  const { data } = await api.get<AuthUser>("/users/me");
  return data;
};

export const createNote = async (newNote: NewNote) => {
  const response = await api.post<Note>("/notes", newNote);
  return response.data;
};

export const deleteNote = async (noteId: string) => {
  const response = await api.delete<Note>(`/notes/${noteId}`);
  return response.data;
};

export const fetchNoteById = async (noteId: string) => {
  const response = await api.get<Note>(`/notes/${noteId}`);
  return response.data;
};
