import { Session } from 'next-auth';

export default function SignedInContent({ session }: { session: Session }) {
    return (
        <div>サインイン: {JSON.stringify(session)}</div>
    );
}
