import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(
    null
  );
  const sendEmail = async (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.REACT_APP_SERVICE_ID,
        import.meta.env.REACT_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.REACT_APP_PUBLIC_KEY
      );
      setStateMessage('Message sent!');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    } catch (error) {
      setStateMessage('Something went wrong, please try again later');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    }

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
export default ContactForm;
