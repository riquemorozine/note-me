import { LoginInput } from "@/styles/components/loginComponent/LoginInput";

interface ILoginInputProps {
  placeholder: string;
  onChange?: (e: any) => void;
}

export default function LoginInputComponent({
  placeholder,
  onChange,
}: ILoginInputProps) {
  return <LoginInput placeholder={placeholder} onChange={onChange} />;
}
