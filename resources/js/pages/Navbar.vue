<template>
    <div className="flex items-center w-screen h-[10vh] bg-white shrink-0">
        <div className="w-[65vw]">
            <div
                className="w-[8vh] h-[8vh] ml-[8vw] my-auto bg-[url('https://s3-alpha-sig.figma.com/img/394c/ab78/d800e629a0407d3c746f3c59a15694f1?Expires=1698019200&Signature=mM1YLtYo2qOuSNKDAv3vCrYY1639IfoVACZ8V2Y6lkQ0aOffKLteqb6q2-XfHbZlufycVwSg~W4O910MRXMjWOTbcbD6GY5x~pFM8Ulx3QG2Ui1FaPrGULJiZTsuH~hDUc5rkzAdhqv~GhjFd18sxtXfEq8qt9XnP-p1-ugbHWKWAGWvWvOvQY9hotRk4V56ohkJnPIDEoD1tMPt6E-c~pDRwrEwVaIS0rlPsXxGQvVJGSsmL5MbrWsZ3mxQub1Fy~TxY1nS2KEcgwnNB~GYiiIkuxVKQmJAiLGwk5Um9nUI9BQvEJI011bO5I9F84ZmhZGL47YI8PP7Ht7sn5b3Nw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover bg-no-repeat"
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
