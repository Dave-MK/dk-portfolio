"use server";

export type ContactState = {
  success: boolean;
  error?: string;
} | null;

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return { success: false, error: "Message is too short." };
  }

  if (!process.env.RESEND_API_KEY) {
    // Graceful fallback — form looks functional but directs to email
    return {
      success: false,
      error: "Contact form not yet configured. Please email ntice.digital@gmail.com directly.",
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      // Update `from` to your verified Resend domain once set up
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ntice.digital@gmail.com",
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try emailing me directly.",
    };
  }
}
