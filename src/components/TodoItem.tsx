'use client'; // use to render on client and not server

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className='flex gap-1 items-center'>
      <input
        type='checkbox'
        id={id}
        className='cursor-pointer peer'
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className='peer-checked:line-through cursor-pointer peer-checked:text-slate-500'
      >
        {title}
      </label>
    </li>
  );
}
