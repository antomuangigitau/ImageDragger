import { useFetch } from '@/hooks/useFetch';
import { BiSearch } from 'react-icons/bi';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import DraggableImage from './DraggableImage';
import { useState, useEffect } from 'react';
const Gallery = () => {
  const queryKey = ['customGetData'];
  const { data, isLoading, error } = useFetch(queryKey);
  const [photos, setPhotos] = useState<{ id: number }[]>([]);

  useEffect(() => {
    if (data && data.photos) {
      setPhotos(data.photos);
    }
  }, [data]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>error occured</h1>;
  }
  const onDragEnd = (e: any) => {
    console.log(e);
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setPhotos((photos: { id: number }[]) => {
      const oldIndex = photos.findIndex(
        (photo: { id: number }) => photo.id === active.id
      );
      const newIndex = photos.findIndex(
        (photo: { id: number }) => photo.id === over.id
      );
      return arrayMove(photos, oldIndex, newIndex);
    });
  };

  return (
    <main className="my-8 px-5">
      <div className="flex justify-end items-center mr-10">
        <BiSearch />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={data.photos}
            strategy={horizontalListSortingStrategy}
          >
            {photos.map((photo: Photo) => {
              return <DraggableImage key={photo.id} photo={photo} />;
            })}
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
};

export default Gallery;
