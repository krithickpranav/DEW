import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailJsConfigured = (): boolean => {
  return !!serviceId && !!templateId && !!publicKey;
};

export const sendContactForm = async (formData: Record<string, unknown> | undefined) => {
  if (!isEmailJsConfigured()) {
    console.error('EmailJS credentials missing. Check your environment variables.');
    throw new Error('Email service is not configured.');
  }

  if (!serviceId || !templateId || !publicKey) {
    // This check is for TypeScript type safety, though isEmailJsConfigured already checks it.
    throw new Error('A configuration key for EmailJS is missing.');
  }

  return emailjs.send(serviceId, templateId, formData, publicKey);
};