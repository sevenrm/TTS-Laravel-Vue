<template>
    <div className="flex items-center w-screen bg-white shrink-0">
        <div className="lg:w-[65vw] md:w-[60vw] sm:w-[50vw] w-[40vw]">
            <div
                className="w-[10vw] h-[4vw] ml-[8vw] my-[1vw] bg-[url('assets/img/Logo.png')] bg-cover bg-no-repeat"
            ></div>
        </div>
        <div
            className="flex items-center lg:w-[35vw] md:w-[40vw] sm:w-[50vw] w-[60vw]"
        >
            <a
                className="h-[1.5em] w-[4.5em] text-[#202223] lg:mr-[3em] lg:text-[16px] md:text-[14px] text-[10px] leading-5 not-italic font-medium font-['SF Pro Text']"
                href="#"
            >
                About
            </a>
            <a
                className="h-[1.5em] w-[4.5em] text-[#202223] lg:mr-[3em] lg:text-[16px] md:text-[14px] text-[10px] leading-5 not-italic font-medium font-['SF Pro Text'] "
                href="#"
            >
                Contact
            </a>
            <button
                className="h-[3em] w-[8em] bg-[#0C8CE9] my-[0.5rem] rounded-lg lg:text-[14px] md:text-[12px] text-[8px] text-[#ffffff] leading-5 not-italic font-medium font-['SF Pro Text'] text-center"
            >
                Download
            </button>
            <!-- <div
                className="flex items-center justify-center h-[0.75rem] py-[1.5rem] w-[9vw] bg-[#0C8CE9] rounded-lg"
            >
                <span className="text-[#ffffff] text-[14px]">Download</span>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",
    setup() {},
};
</script>

<style></style>
