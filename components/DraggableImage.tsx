import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const DraggableImage = ({ photo }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: photo.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const src = photo?.src?.original;
  const photographer = photo?.photographer;
  return (
    <Image
      className="w-[600px] h-[500px] rounded-2xl md:w-[300px] md:h-[300px]"
      src={src}
      alt={photographer}
      width={600}
      height={500}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    />
  );
};

export default DraggableImage;
