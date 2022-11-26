function todoDeletionCheck(store) {
  return (next) => (action) => {
    if (action.type === 'DELETE_TODO') {
      const { todos } = store.getState();
      const todosToBeDeleted = todos.find((todo) => todo.id === action.payload.id);

      if (!todosToBeDeleted.complete) {
        alert('Tidak bisa menghapus to-do yang belum selesai.');
        return;
      }
    }
    return next(action);
  };
}

export { todoDeletionCheck };