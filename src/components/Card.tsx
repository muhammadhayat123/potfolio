import React from 'react';
import Image from 'next/image';

interface Propstype {
  title: string;
  desc: string;
  tags: string[];
  img: string;
}

const Card: React.FC<Propstype> = ({ title, desc, tags, img }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="flip-down">
      <div className="w-[300px] sm:w-[350px] h-auto">
        <Image
          src={img}
          width={350}
          height={350}
          alt={title}
          className="object-cover rounded-md"
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default Card;
