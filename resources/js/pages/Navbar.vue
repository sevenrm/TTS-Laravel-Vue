<template>
    <div className="flex items-center w-screen h-[10vh] bg-white shrink-0">
        <div className="w-[65vw]">
            <div
                className="w-[20vh] h-[8vh] ml-[8vw] my-auto bg-[url('assets/img/Logo.png')] bg-cover bg-no-repeat"
            ></div>
        </div>
        <div className="flex items-center w-[35vw]">
            <a
                className="h-[1.5rem] w-[5vw] text-[#202223] mr-[3.5vw] text-[16px] leading-5 not-italic font-medium font-['SF Pro Text']"
            >
                About
            </a>
            <a
                className="h-[1.5rem] w-[5vw] text-[#202223] mr-[3.5vw] text-[16px] not-italic font-medium font-['SF Pro Text'] "
            >
                Contact
            </a>
            <button
                className="h-[2.75rem] w-[9vw] bg-[#0C8CE9] rounded-lg text-[14px] text-[#ffffff] leading-5 not-italic font-medium font-['SF Pro Text']"
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
