import { NextUIButton } from '@/components/ui/buttons';
import { auth, signIn, signOut } from '@/lib/auth';
import Image from 'next/image';

export async function User() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <form
        action={async () => {
          'use server';
          // await signIn('google');
          await signIn('kakao');
        }}
      >
        <NextUIButton
          divClassName=""
          className="px-8"
          type="submit"
          text="Sign In"
          color="default"
          size="md"
          radius="md"
        />
      </form>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Image
        className="h-8 w-8 rounded-full"
        src={user.image!}
        height={32}
        width={32}
        alt={`${user.name} avatar`}
      />
      <span>{user.name}</span>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <NextUIButton
          divClassName=""
          className="px-6"
          type="submit"
          text="Sign Out"
          color="default"
          size="md"
          radius="md"
        />
      </form>
    </div>
  );
}
