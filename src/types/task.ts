export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface NewTask {
  text: string;
}

export interface UpdatedTask {
  id: string;
  text?: string;
  completed?: boolean;
  createdAt?: number;
}
