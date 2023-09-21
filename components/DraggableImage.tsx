interface PhotoDrag {
  photo: Photo;
}
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DraggableImage = ({ photo }: PhotoDrag) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: photo.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const { src, photographer } = photo;
  return (
    <img
      className="w-[600px] h-[500px] object-cover rounded-2xl md:w-[300px] md:h-[300px]"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      src={src.original}
      alt={photographer}
      style={style}
    />
  );
};

export default DraggableImage;
