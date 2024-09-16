import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import { forgotPasswordStrings } from "~/shared/strings";

interface Props {
  url: string;
  email: string;
}

export default function ForgotPasswordEmail({ url, email }: Props) {
  return (
    <Html>
      <Head />
      <Preview>{forgotPasswordStrings.preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <h1 className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              {forgotPasswordStrings.heading}
            </h1>

            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded bg-[#6d28d9] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={url}
              >
                {forgotPasswordStrings.button}
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              or copy and paste this URL into your browser:{" "}
              <Link href={url} className="text-blue-600 no-underline">
                {url}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This reset password request was intended for{" "}
              <span className="text-black">{email}</span>. If you were not
              expecting this login link, you can ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ForgotPasswordEmail.PreviewProps = {
  url: "https://example.com",
  email: "test@example.com",
} as Props;
