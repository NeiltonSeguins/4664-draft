import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Sobre", href: "#" },
  { name: "Notícias", href: "#" },
];

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      console.error("An unexpected error occurred." + err);
    }
  };

  return (
    <section>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Boltfunds</span>
              <img alt="" src="./logo.png" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer text-gray-50"
            >
              <span className="sr-only">Abrir o menu principal</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/signin"
              onClick={handleSignOut}
              className="text-sm/6 font-semibold text-gray-50"
            >
              Sair <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Boltfunds</span>
                <img alt="" src="./logo.png" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 cursor-pointer text-gray-50"
              >
                <span className="sr-only">Fechar o menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-50 hover:bg-teal-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/signin"
                    onClick={handleSignOut}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-50 hover:bg-teal-600"
                  >
                    Sair
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-50 sm:text-7xl">
              A melhor solução de{" "}
              <span className="text-teal-300">investimentos em energia</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Soluções financeiras confiáveis e sustentáveis que beneficiam
              tanto seu bolso quanto o meio ambiente.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Começar
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-50">
                Leia mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
