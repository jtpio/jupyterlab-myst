import React, { createContext, useContext } from 'react';

export interface ITaskItemController {
  setTaskItem(line: number, checked: boolean): void;
}

type TaskItemControllerState = {
  controller?: ITaskItemController;
};

const TaskItemControllerContext = createContext<
  TaskItemControllerState | undefined
>(undefined);

// Create a provider for components to consume and subscribe to changes
export function TaskItemControllerProvider({
  controller,
  children
}: {
  controller?: ITaskItemController;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <TaskItemControllerContext.Provider value={{ controller }}>
      {children}
    </TaskItemControllerContext.Provider>
  );
}

export function useTaskItemController(): TaskItemControllerState {
  return useContext(TaskItemControllerContext) ?? {};
}
