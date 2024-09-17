import "server-only";
import { Resend } from "resend";
import VerificationEmail from "../../lib/email/VerifyEmail";
import ForgotPasswordEmail from "~/lib/email/ForgotPassword";
import { env } from "~/env";
import { verifyEmailStrings, forgotPasswordStrings } from "~/shared/strings";

export const runtime = "edge";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendVerificationEmail({
  to,
  token,
  redirect,
}: {
  to: string;
  token: string;
  redirect: string;
}) {
  const url = `${env.BASE_URL}/auth/verify?token=${token}&redirect=${redirect}`;

  await resend.emails.send({
    from: env.EMAIL_FROM,
    to,
    subject: verifyEmailStrings.subject,
    react: <VerificationEmail url={url} email={to} />,
  });
}

export async function sendForgotPasswordEmail({
  to,
  token,
}: {
  to: string;
  token: string;
}) {
  const url = `${env.BASE_URL}/auth/reset-password?token=${token}`;

  await resend.emails.send({
    from: env.EMAIL_FROM,
    to,
    subject: forgotPasswordStrings.subject,
    react: <ForgotPasswordEmail url={url} email={to} />,
  });
}