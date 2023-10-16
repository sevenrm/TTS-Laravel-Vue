<template>
    <nav className="bg-white w-full top-0 left-0">
        <div
            className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <a href="#" className="flex items-center">
                <img
                    src="../../css/assets/img/Logo.png"
                    className="h-8 mr-3"
                    alt="Logo"
                />
            </a>
            <div className="flex flex-row">
                <div className="flex md:order-2">
                    <button
                        type="button"
                        className="text-white bg-[#0C8CE9] h-10 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-1"
                    >
                        Download
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:pr-8"
                    id="navbar-sticky"
                >
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                    >
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-[#202223] text-[16px] md:p-0 font-medium"
                                >About</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-[#202223] text-[16px] font-medium md:p-0"
                                >Contact</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    setup() {},
};
</script>

<style></style>
