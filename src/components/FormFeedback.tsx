import { Button } from '@/components/Button';
import { AlertCircle, CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const FormFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: 'success',
        message: `Message sent successfully! I'll get back to you soon.`,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);

      const message =
        error && typeof error === 'object' && 'text' in error
          ? (error as { text?: string }).text
          : undefined;

      setSubmitStatus({
        type: 'error',
        message: message || 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-2'>
              Name
            </label>
            <input
              id='name'
              type='text'
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder='Your name...'
              className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-2'>
              Email
            </label>
            <input
              id='email'
              type='email'
              required
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder='your@email.com'
              className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium mb-2'>
              Message
            </label>
            <textarea
              id='message'
              rows={5}
              required
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder='Your message...'
              className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none h-32'
            />
          </div>
          <Button
            size='lg'
            type='submit'
            className='w-full'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                Send Message
                <Send className='w-5 h-5' />
              </>
            )}
          </Button>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === 'success'
                         ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                         : 'bg-red-500/10 border border-red-500/20 text-red-400'
                     }`}
            >
              {submitStatus.type === 'success' ? (
                <CheckCircle className='w-5 h-5 shrink-0' />
              ) : (
                <AlertCircle className='w-5 h-5 shrink-0' />
              )}
              <p className='text-sm'>{submitStatus.message}</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
