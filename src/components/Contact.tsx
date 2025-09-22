export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border rounded-md p-3" />
        <input type="email" placeholder="Email" className="border rounded-md p-3" />
        <textarea placeholder="Message" className="border rounded-md p-3" rows={5}></textarea>
        <button type="submit" className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
}
