'use client';

import Gallery from "@/components/Gallery";



const page = () => {
  return (
    <>
      <header>
        <div
          style={{
            height: '350px',
            width: '100%',
            backgroundImage: 'url("/assets/joshua-earle-unsplash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </header>
      <Gallery />
    </>
  );
};
export default page;
