import { Button, Input } from '@shared/ui';
import { Plus } from 'lucide-react';
import { useState, type FormEvent } from 'react';

type Props = {
  onAdd: (text: string) => void;
};

export const AddTodoForm = ({ onAdd }: Props) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
      <Input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Новая задача..."
        className="flex-1 text-sm sm:text-base"
      />
      <Button
        type="submit"
        className="flex items-center gap-1.5 text-xs sm:text-sm px-4 sm:px-6"
      >
        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Добавить</span>
      </Button>
    </form>
  );
};
