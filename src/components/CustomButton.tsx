import { CustomButton } from "@/styles/components/loginComponent/CustomButton";
import Image from "next/image";

interface CustomButtonProps {
  src?: string;
  label: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function CustomButtonComponent({
  src,
  label,
  alt,
  width,
  height,
}: CustomButtonProps) {
  return (
    <CustomButton>
      {src && width && height && alt ? (
        <>
          <Image src={src} width={width} height={height} alt={alt} />
          &nbsp;
          {label}
        </>
      ) : (
        label
      )}
    </CustomButton>
  );
}
