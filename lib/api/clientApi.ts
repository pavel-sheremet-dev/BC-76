import { Note, NewNote } from "@/types/note";
import { User } from "@/types/user";
import {
  api,
  Credentials,
  FetchNotesProps,
  FetchNotesResponse,
  UserToUpdate,
} from "./api";

// register

export const register = async (credentials: Credentials) => {
  const { data } = await api.post<User>("/auth/register", credentials);

  return data;
};

// login

export const login = async (credentials: Credentials) => {
  const { data } = await api.post<User>("/auth/login", credentials);

  return data;
};

// logout

export const logout = async () => {
  await api.post<void>("/auth/logout");
};

// checkSession

export const checkSession = async () => {
  const { data } = await api.get<{ success: boolean }>("/auth/session");
  return data;
};

//  getUser

export const getUser = async () => {
  const { data } = await api.get<User>("/users/me");
  return data;
};

//  updateUser

export const updateUser = async (updatedUser: UserToUpdate) => {
  const { data } = await api.patch<User>("/users/me", updatedUser);
  return data;
};

// notes

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
