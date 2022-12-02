export default function Navbar() {
    return (
      <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input type="text" className="input-text" placeholder="search" />
          </div>
          <div className="shrink w-80 sm:order-2">
            <a className="font-bold uppercase text-3xl">Lensium</a>
          </div>
          <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
              <button
                className="border-2 border-black px-3 py-2 rounded-lg hover:bg-green-100 ">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
 