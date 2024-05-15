import { StartButton } from '@/components/ui/startButton';
import { NextUIButton } from '@/components/ui/buttons';
import Link from 'next/link';
import { auth, signIn } from '@/lib/auth';

export default async function LoginPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <main className="flex flex-1 min-h-screen min-w-screen flex-col gap-4 p-4 md:gap-8 md:p-6 items-center">
        <h1 className="font-semibold text-lg md:text-4xl">
          쿠사 포차에 오신걸 황영합니다!
        </h1>
        <form
          action={async () => {
            'use server';
            // await signIn('google');
            await signIn('kakao');
          }}
        >
          <NextUIButton
            divClassName="items-center"
            className="px-16 bg-[#C5050C] text-3xl font-bold"
            type="submit"
            text="Get Started"
            color="danger"
            size="lg"
            radius="full"
          />
        </form>
      </main>
    );
  }

  return (
    <main className="flex flex-1 min-h-screen min-w-screen flex-col gap-4 p-4 md:gap-8 md:p-6 items-center">
      <h1 className="font-semibold text-lg md:text-4xl">
        쿠사 포차에 오신걸 황영합니다!
      </h1>
      <Link href="/dashboard">
        <StartButton
          className="text-3xl text-white font-bold bg-[#C5050C] rounded-full py-6 px-12 shadow"
          variant="outline"
        >
          Start Ordering
        </StartButton>
      </Link>
    </main>
  );
}
