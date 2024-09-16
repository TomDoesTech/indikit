export const site = {
  title: "IndiKit",
  description: "IndiKit is a starter kit for building a SaaS product",
  profile: {
    title: "Profile",
    description: "Profile page",
  },
} as const;

/*
 * Emails
 */
export const verifyEmailStrings = {
  subject: "Verify your email",
  preview: "Please verify your email address",
  heading: "Please verify your email address",
  button: "CLICK HERE TO VERIFY",
} as const;

export const forgotPasswordStrings = {
  subject: "Reset your password",
  preview: "Please reset your password",
  heading: "Please reset your password",
  button: "RESET PASSWORD",
} as const;

/*
 * Landing page
 */

export const faqs = [
  {
    question: "Is this kit free?",
    answer: "Yes. Use it as you please",
    value: "item-1",
  },
  {
    question: "Can I use this in a commercial project?",
    answer: "Yes. Use it as you please",
    value: "item-2",
  },
  {
    question: "I love it! Can I donate to the creator?",
    answer: "Yes. you can buy me a coffee at https://buymeacoffee.com/tomn",
    value: "item-3",
  },
] as const;
