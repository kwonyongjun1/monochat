import { Avatar as AvatarPrimitive } from "radix-ui";
import Image from "next/image";
import { cn } from "@/utils/cn";

export interface AvatarProps
  extends Omit<
    React.ComponentProps<typeof AvatarPrimitive.Root>,
    "size" | "children"
  > {
  size?: number;
  src?: string | null;
}

const Avatar = ({ className, size = 18, src }: AvatarProps) => {
  const imageUrl = src || "/assets/symbol/google.svg";

  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        className
      )}
    >
      <AvatarPrimitive.Image
        className="flex-center aspect-square "
        src={imageUrl}
        asChild
      >
        <Image src={imageUrl} alt="symbol" width={size} height={size} />
      </AvatarPrimitive.Image>
      <AvatarPrimitive.Fallback className="AvatarFallback" delayMs={600}>
        <Image src={imageUrl} alt="symbol" width={size} height={size} />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
