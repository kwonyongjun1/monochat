import Pusher from "pusher";
import { PRIVATE_ENV } from "@/constants/pirvate-env";

const pusher = new Pusher({
  appId: PRIVATE_ENV.PUSHER_APP_ID,
  key: PRIVATE_ENV.PUSHER_KEY,
  secret: PRIVATE_ENV.PUSHER_SECRET,
  cluster: PRIVATE_ENV.PUSHER_CLUSTER,
  useTLS: true,
});

export default pusher;
