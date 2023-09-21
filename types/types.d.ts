interface Photo {
  id: number;
  src?: {
    original: string;
  };
  photographer?: string;
}

interface PhotoData extends Pick<Photo, 'id'> {
  src: {
    original: string;
  };
  photographer: string;
}
