export const selectBoards = (state) => state.boards.items;
export const selectBoardsLoading = (state) => state.boards.isLoading;
export const selectBoardsError = (state) => state.boards.error;

export const selectColumns = (state) => state.columns.items;
export const selectColumnsLoading = (state) => state.columns.isLoading;
export const selectColumnsError = (state) => state.columns.error;

export const selectTasks = (state) => state.tasks.items;
export const selectTasksLoading = (state) => state.tasks.isLoading;
export const selectTasksError = (state) => state.tasks.error;
