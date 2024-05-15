'use client';

import React, { useState, useEffect } from 'react';
import MenuCard from '@/components/ui/myCard';
import { NextUIButton } from '@/components/ui/buttons';

export default function DashboardPage() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch('/api/dashboard/menus', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const menuData = await response.json();
          if (menuData) {
            // Check if the data is not empty
            setMenus(menuData);
          }
          console.log(menuData);
        } else {
          console.error('Failed to fetch menus:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch menus:', error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">POCHA</h1>
      </div>

      <div className="w-full flex flex-row mb-4">
        <h1 className="pr-2 font-semibold text-lg md:text-2xl">Menu</h1>
        <NextUIButton
          divClassName="px-2"
          className=""
          text="Add Menu"
          color="success"
          size="md"
          radius="full"
        />
        <NextUIButton
          divClassName="px-2"
          className=""
          text="Edit Menu"
          color="warning"
          size="md"
          radius="full"
        />
        <NextUIButton
          divClassName="px-2"
          className=""
          text="Delete Menu"
          color="danger"
          size="md"
          radius="full"
        />
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10">
        {menus.map((menu, index) => (
          <div key={index} className="flex flex-row">
            <MenuCard menu={menu} />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row mb-4">
        <h1 className="pr-2 font-semibold text-lg md:text-2xl">Tables</h1>
        <NextUIButton
          divClassName="px-2"
          className=""
          text="Add Table"
          color="success"
          size="md"
          radius="full"
        />
        <NextUIButton
          divClassName="px-2"
          className=""
          text="Edit Table"
          color="warning"
          size="md"
          radius="full"
        />
        <NextUIButton
          divClassName="px-2"
          className=""
          text="Delete Table"
          color="danger"
          size="md"
          radius="full"
        />
      </div>
    </main>
  );
}
