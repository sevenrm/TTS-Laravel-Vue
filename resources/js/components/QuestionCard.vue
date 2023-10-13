<template>
    <div className="flex justify-center flex-col m-[2vh] w-full px-[2vw]">
        <template v-if="questionId === '1'">
            <div className="flex items-center w-full">
                <div className="w-[90%]">
                    <h4
                        className="text-[22px] text-[#0C8CE9] font-medium leading-7 mb-[1vh]"
                    >
                        Is this text to speech free?
                    </h4>
                </div>
                <button
                    className="w-[10px] h-[1px] mr-[1vw] bg-[url('assets/svg/button1.svg')] bg-cover bg-no-repeat"
                ></button>
            </div>

            <p
                className="text-[18px] text-[#6F6C90] font-normal leading-[30px] mb-[4vh]"
            >
                Yes, It's free
            </p>
            <div className="w-full bg-[#D9DBE9] h-[1px]"></div>
        </template>
        <template v-else-if="questionId === '2'">
            <div className="flex items-center w-full mb-[5vh]">
                <div className="w-[90%]">
                    <h4
                        className="text-[22px] text-[#170F49] font-medium leading-7"
                    >
                        What is the output format?
                    </h4>
                </div>
                <button
                    className="w-[10px] h-[10px] mr-[1vw] bg-[url('assets/svg/button2.svg')] bg-cover bg-no-repeat"
                ></button>
            </div>
            <div className="w-full bg-[#D9DBE9] h-[1px]"></div>
        </template>
        <template v-else-if="questionId === '3'">
            <div className="flex items-center w-full mb-[5vh]">
                <div className="w-[90%]">
                    <h4
                        className="text-[22px] text-[#170F49] font-medium leading-7 "
                    >
                        How many languages does text-to-speech work in?
                    </h4>
                </div>
                <button
                    className="w-[10px] h-[10px] mr-[1vw] bg-[url('assets/svg/button2.svg')] bg-cover bg-no-repeat"
                ></button>
            </div>
            <div className="w-full bg-[#D9DBE9] h-[1px]"></div>
        </template>
        <template v-else>
            <div className="flex items-center w-full">
                <div className="w-[90%]">
                    <h4
                        className="text-[22px] text-[#170F49] font-medium leading-7"
                    >
                        Can I use generated files for commercial purposes?
                    </h4>
                </div>
                <button
                    className="w-[10px] h-[10px] mr-[1vw] bg-[url('assets/svg/button2.svg')] bg-cover bg-no-repeat"
                ></button>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: "questionCard",
    props: {
        questionId: "",
        isOpen: false,
    },
    setup() {},
};
</script>
