import { toast } from "@/utils/toast";
import { useEffect } from "react";

const useWelcomeNotify = () => {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      toast({
        message: "Welcome to monochat 😊",
        type: "success",
      });
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);
};

export { useWelcomeNotify };
