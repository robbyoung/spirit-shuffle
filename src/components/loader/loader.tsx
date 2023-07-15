import { useState, useEffect, ReactNode } from 'react';
import { PuffLoader } from 'react-spinners';
import './loader.scss';

interface LoaderProps {
  images: string[];
  children: ReactNode;
}

export default function Loader({ images, children }: LoaderProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image: string) => loadImage(image)))
      .then(() => setLoaded(true))
      .catch((err) => console.log('Failed to load images', err));
  }, []);

  return (
    <div>
      {loaded ? (
        children
      ) : (
        <div className="loader">
          <PuffLoader color="#D9D9D9" />
        </div>
      )}
    </div>
  );
}
