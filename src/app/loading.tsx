import { LoadingComponent } from "@/styles/components/loadingComponent/Loading";

type LoadingProps = {
  dark: boolean;
};

export default function Loading({ dark }: LoadingProps) {
  return (
    <>
      <LoadingComponent theme={{ main: dark ? "dark" : "white" }}>
        a
      </LoadingComponent>
    </>
  );
}
