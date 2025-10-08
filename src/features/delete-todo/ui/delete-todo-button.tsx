import { Button } from '@shared/ui';
import { Trash2 } from 'lucide-react';

type Props = {
  id: string;
  onDelete: (id: string) => void;
};

export const DeleteTodoButton = ({ id, onDelete }: Props) => {
  return (
    <Button
      onClick={() => onDelete(id)}
      variant="ghost"
      size="sm"
      className="p-1.5 sm:p-2 flex-shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-slate-100 hover:text-slate-700 normal-case"
      aria-label="Удалить задачу"
    >
      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  );
};
