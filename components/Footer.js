export default function Footer() {
    return (
      

<footer aria-label="Site Footer" class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="lg:flex lg:items-start lg:gap-8">
      <div class="text-teal-600 dark:text-teal-300">
        <svg
          class="h-8"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="#"
        >
          <path
            d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div
        class="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
      >
        <div class="col-span-2">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Get the latest news!
            </h2>

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
          </div>
        </div>

        <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <form class="w-full">
            <label for="UserEmail" class="sr-only"> Email </label>

            <div
              class="p-2 border border-gray-100 focus-within:ring dark:border-gray-800 sm:flex sm:items-center sm:gap-4"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                class="w-full border-none focus:border-transparent focus:ring-transparent dark:bg-gray-900 dark:text-white sm:text-sm"
              />

              <button
                class="w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white uppercase transition-none bg-teal-500 hover:bg-teal-600 sm:mt-0 sm:w-auto sm:flex-shrink-0"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-900 dark:text-white">Services</p>

          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  1on1 Coaching
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Company Review
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Accounts Review
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  HR Consulting
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-900 dark:text-white">Company</p>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Meet the Team
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Accounts Review
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-900 dark:text-white">Helpful Links</p>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-900 dark:text-white">Legal</p>

          <nav aria-label="Footer Navigation - Legal" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Accessibility
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Returns Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-900 dark:text-white">Downloads</p>

          <nav aria-label="Footer Navigation - Downloads" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Marketing Calendar
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  SEO Infographics
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul
          class="flex justify-start col-span-2 gap-6 lg:col-span-5 lg:justify-end"
        >
          

          

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span class="sr-only">Twitter</span>

              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span class="sr-only">GitHub</span>

              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          
        </ul>
      </div>
    </div>

    <div class="pt-8 mt-8 border-t border-gray-100 dark:border-gray-800">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <p class="text-xs text-left text-gray-500 dark:text-gray-400">
          &copy; 2022. Lensium Name. All rights reserved.
        </p>

        <nav aria-label="Footer Navigation - Support">
          <ul class="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
            <li>
              <a
                href="#"
                class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Terms & Conditions
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Cookies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>

      
    );
  }
 