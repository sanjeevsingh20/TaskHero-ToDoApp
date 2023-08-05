import React from "react";
import "../Css/About.css"
export default function About() {
  return (
    <div>
      <main className="pt-8 text-left pb-16 w-full lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 w-full">
        <div className="flex flex-col	 px-20  pxy">
          <article className=" w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Welcome to TaskHero, your ultimate task management and
                productivity platform!
              </h1>
            </header>
            <h2 className="text-left my-5">Our Mission</h2>
            <p className="lead">
              At TaskHero, our mission is simple: to empower individuals and
              teams to conquer their tasks and achieve their goals effortlessly.
              We understand that modern life can be hectic, with endless to-do
              lists, deadlines, and responsibilities. That's why we've created
              TaskHero, your trusty sidekick, to make managing tasks a breeze
              and help you become a productivity superhero.
            </p>

            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/c26z2hZ/image-removebg-preview-11.png"
                alt="image-removebg-preview-11"
                border="0"
                width={"200"}
              />
            </div>
            <h2>Why Choose TaskHero?</h2>
            <li className="py-2">
              <strong>Simplicity: </strong>We believe in keeping things
              straightforward. TaskHero boasts a user-friendly interface,
              allowing you to focus on what matters—getting things done.
            </li>
            <li className="py-2">
              <strong>Collaboration: </strong>With TaskHero, you don't have to
              go it alone. Team up with others, share tasks, and communicate
              efficiently to achieve collective success.
            </li>
            <li className="py-2">
              <strong>Security: </strong>Your data's safety is our top priority.
              TaskHero employs robust security measures to protect your
              information and privacy.
            </li>
            <li className="py-2">
              <strong>Constant Improvement: </strong>We're dedicated to
              enhancing your productivity journey continually. Expect regular
              updates, new features, and performance improvements to ensure
              TaskHero remains the hero you deserve..
            </li>
            <li className="py-2">
              <strong>Flexibility: </strong>TaskHero adapts to your needs,
              whether you're a freelancer, project manager, student, or parent.
              Customize your tasks, labels, and workflows to fit your unique
              requirements.
            </li>
          </article>
        </div>
      </main>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    for="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="/"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
