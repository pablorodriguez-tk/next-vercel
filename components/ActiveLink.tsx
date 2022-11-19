import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface Props {
  href: string;
  text: string;
}

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: FC<Props> = (props: Props) => {
  const { text, href } = props;
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <span style={asPath === href ? style : undefined}>{text}</span>
    </Link>
  );
};
