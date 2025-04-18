export const privateEnv = {
  KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
  KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
};

export const PRIVATE_ENV = privateEnv as Record<
  keyof typeof privateEnv,
  string
>;
