<template>
    <nav class="bg-white w-full top-0 left-0">
        <div
            class="max-w-screen flex flex-wrap items-center justify-between xl:mx-10 mx-auto p-4"
        >
            <a href="#" class="flex items-center">
                <img
                    src="../../css/assets/img/Logo.png"
                    class="h-8 mr-3"
                    alt="Logo"
                />
            </a>
            <div class="flex flex-row relative">
                <div class="flex md:order-2">
                    <button
                        type="button"
                        class="text-white bg-[#0C8CE9] h-10 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-1"
                    >
                        Download
                    </button>
                    <button
                        @click="toggleMenu"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                        :aria-controls="menuOpen ? 'navbar-sticky' : null"
                        :aria-expanded="menuOpen ? 'true' : 'false'"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
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
                    :class="[
                        'items-center',
                        'justify-between',
                        menuOpen ? 'flex' : 'hidden',
                        'w-full',
                        'md:flex',
                        'md:w-auto',
                        'md:order-1',
                        'md:pr-8',
                    ]"
                    id="navbar-sticky"
                >
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:static dark:bg-gray-800 md:dark:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 absolute top-full left-0 right-0"
                    >
                        <li>
                            <a
                                href="#"
                                class="block py-2 pl-3 pr-4 text-[#202223] text-[16px] md:p-0 font-medium"
                                >About</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 pl-3 pr-4 text-[#202223] text-[16px] font-medium md:p-0"
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
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>
