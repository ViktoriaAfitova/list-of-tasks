type Props = {
  id: string;
  completed: boolean;
  onToggle: (id: string) => void;
};

export const ToggleTodoCheckbox = ({ id, completed, onToggle }: Props) => {
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => onToggle(id)}
      className="w-5 h-5 flex-shrink-0 rounded-sm border-2 border-slate-400 text-slate-800 focus:ring-2 focus:ring-slate-700 focus:ring-offset-0 cursor-pointer transition-colors"
    />
  );
};
