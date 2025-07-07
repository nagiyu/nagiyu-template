import { NextRequest, NextResponse } from 'next/server';
import webpush from 'web-push';
import SecretsManagerUtil from '@common/aws/SecretsManagerUtil';

export async function POST(req: NextRequest) {
  try {
    const { message, subscription } = await req.json();

    if (!subscription) {
      return NextResponse.json({ error: 'No subscription provided' }, { status: 400 });
    }

    // VAPID keys should be set in environment variables
    const VAPID_PUBLIC_KEY = await SecretsManagerUtil.getSecretValue('ClientNextjsTemplate', 'VAPID_PUBLIC_KEY');
    const VAPID_PRIVATE_KEY = await SecretsManagerUtil.getSecretValue('ClientNextjsTemplate', 'VAPID_PRIVATE_KEY');

    // Ensure VAPID_SUBJECT is properly formatted with mailto: prefix
    const envSubject = await SecretsManagerUtil.getSecretValue('ClientNextjsTemplate', 'VAPID_SUBJECT') || 'admin@example.com';
    const VAPID_SUBJECT = envSubject.startsWith('mailto:') ? envSubject : `mailto:${envSubject}`;

    if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
      return NextResponse.json({ error: 'VAPID keys not configured' }, { status: 500 });
    }

    // Configure web-push with VAPID keys
    webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

    const payload = JSON.stringify({
      title: 'プッシュ通知',
      body: message,
      icon: '/ponzu_square.png',
    });

    await webpush.sendNotification(subscription, payload);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Push notification failed:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error('Push notification failed:', error);
      return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
    }
  }
}
