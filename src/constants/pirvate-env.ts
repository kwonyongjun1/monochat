export const privateEnv = {
  KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
  KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
  PUSHER_APP_ID: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  PUSHER_KEY: process.env.NEXT_PUBLIC_PUSHER_KEY,
  PUSHER_SECRET: process.env.NEXT_PUBLIC_PUSHER_SECRET,
  PUSHER_CLUSTER: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
};

export const PRIVATE_ENV = privateEnv as Record<
  keyof typeof privateEnv,
  string
>;
