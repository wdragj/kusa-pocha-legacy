'use client';

import { Card, CardFooter, Image } from '@nextui-org/react';

// TypeScript interface for MenuCard component
interface MenuCardProps {
  menu: {
    id: number;
    name: string;
    price: number;
    organization: string;
    img: string;
    createdAt: string;
  };
}

export default function MenuCard({ menu }: MenuCardProps) {
  return (
    <Card
      isPressable
      onPress={() => console.log('item pressed')}
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={menu.img}
        width={'100%'}
      />
      <div className="p-1"> </div>
      <CardFooter className="justify-between border-black/20 border-1 p-1 rounded-large">
        <p className="text-tiny text-black/80">{menu.name}</p>
        <p className="text-tiny text-black/80">${menu.price}</p>
      </CardFooter>
    </Card>
  );
}
