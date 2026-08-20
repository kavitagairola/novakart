import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@novakart.com",
      description: "We'll get back to you as soon as possible.",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Available during business hours.",
    },
    {
      icon: Clock3,
      title: "Business Hours",
      value: "Mon - Sat, 9 AM - 6 PM",
      description: "We're happy to help with your questions.",
    },
  ];

  return (
    <MainLayout>
      <Container>
        <section className="py-10 md:py-12">

          {/* Header */}
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10 md:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Contact NovaKart
            </p>

            <h1 className="mt-3 text-3xl font-bold md:text-4xl">
              We're here to help.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
              Have a question about a product, order or your shopping
              experience? Send us a message and our team will be happy to
              assist you.
            </p>
          </div>

          {/* Contact Content */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Get in touch
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Choose the easiest way to reach us.
              </p>

              <div className="mt-6 space-y-4">

                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-slate-200 p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {item.value}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
                <MapPin
                  size={21}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Our Location
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    NovaKart Online Store
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

              <h2 className="text-2xl font-bold text-slate-900">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the details below and we'll get back to you.
              </p>

              <form className="mt-6 space-y-4">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <Button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </Button>

              </form>
            </div>

          </div>

        </section>
      </Container>
    </MainLayout>
  );
}

export default Contact;