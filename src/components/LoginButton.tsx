import { LoginButton } from "@/styles/components/loginComponent/LoginButton";
import Image from "next/image";

interface LoginButtonProps {
  src?: string;
  label: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function LoginButtonComponent({
  src,
  label,
  alt,
  width,
  height,
}: LoginButtonProps) {
  return (
    <LoginButton>
      {src && width && height && alt ? (
        <>
          <Image src={src} width={width} height={height} alt={alt} />
          &nbsp;
          {label}
        </>
      ) : (
        label
      )}
    </LoginButton>
  );
}
