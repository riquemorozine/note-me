import { LoginInput } from "@/styles/components/loginComponent/LoginInput";

interface ILoginInputProps {
  placeholder: string;
}

export default function LoginInputComponent({ placeholder }: ILoginInputProps) {
  return <LoginInput placeholder={placeholder} />;
}
