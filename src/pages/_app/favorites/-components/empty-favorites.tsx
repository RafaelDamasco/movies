import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

export function EmptyFavorites() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <p className="text-gray-500 text-lg">Não existem filmes</p>
      <Button onClick={() => navigate({ to: '/' })}>
        Explorar filmes
      </Button>
    </div>
  );
}
