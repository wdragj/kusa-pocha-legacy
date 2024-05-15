// api/dashboard/menus/route.ts

'use server';

import { getMenus } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const menus = await getMenus();
    // res.status(200).json(menus);
    console.log('Api Results', menus);

    // return {
    //   status: 200,
    //   body: menus
    // };

    return new Response(JSON.stringify(menus), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 200
    });
  } catch (error) {
    console.error('Failed to fetch menus:', error);
    // res.status(500).json({ error: 'Failed to fetch menus' });
  }
}
