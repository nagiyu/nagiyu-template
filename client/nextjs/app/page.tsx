import AuthUtil from '@common/auth/AuthUtil';
import BasicAppBar from '@common/components/AppBars/BasicAppBar';
import SignInButton from '@common/components/Buttons/SignInButton';
import SignOutButton from '@common/components/Buttons/SignOutButton';

import GuestContent from '@/app/components/GuestContent';
import SignedInContent from '@/app/components/SignedInContent';

import styles from './page.module.css';

export default async function Home() {
  const session = await AuthUtil.getServerSession();

  return (
    <div className={styles.page}>
      <BasicAppBar right={!session ? <SignInButton /> : <SignOutButton />} />

      {!session ? <GuestContent /> : <SignedInContent session={session} />}
    </div>
  );
}
