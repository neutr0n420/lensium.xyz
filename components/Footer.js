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
         
        </svg>
      </div>

      <div
        class="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
      >
        <div class="col-span-2">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Get the latest news from lensium!
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
                placeholder="lensium@xyz.com"
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
                  Blog Articles
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Press Release(Contact Us!)
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

              
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-900 dark:text-white">Made with ❤️ by Team Lensium!</p>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
          
          </nav>
        </div>

        <ul
          class="flex justify-start col-span-2 gap-6 lg:col-span-5 lg:justify-end"
        >
          

          

          <li>
            <a
              href="https://twitter.com/lensium_xyz"
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
              href="https://github.com/lensium-xyz"
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
          &copy;Lensium 2022. All rights reserved.
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
 