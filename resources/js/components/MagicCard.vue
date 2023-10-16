<template>
    <div
        className="flex flex-col m-[2vh] bg-[#F6F6F6] lg:w-[40%] sm:w-[60%] w-[90%] h-[17rem] rounded-[14px] px-[1rem] py-[2rem]"
    >
        <template v-if="magicId === '1'">
            <h4
                className="sm:text-[20px] text-[16px] font-semibold leading-7 mb-[2rem]"
            >
                Transform Anything into Video
            </h4>
            <p className="sm:text-[16px] text-[12px] font-normal leading-7">
                Transform your physical books, PDF or images into a natural
                sounding voices in seconds that you can listen for hours.
            </p>
        </template>
        <template v-else-if="magicId === '2'">
            <h4
                className="sm:text-[20px] text-[16px] font-semibold leading-7 sm:mb-[2rem] mb-[1rem]"
            >
                Text Reader to increase your retention
            </h4>
            <p className="sm:text-[16px] text-[12px] font-normal leading-7">
                In Crikk, sentences and words are highlighted as it reads,
                making it convenient for users to follow along while listening.
                So you can memorise more.
            </p>
        </template>
        <template v-else-if="magicId === '3'">
            <h4
                className="sm:text-[20px] text-[16px] font-semibold leading-7 mb-[2rem]"
            >
                Unlock All voices
            </h4>
            <p className="sm:text-[16px] text-[12px] font-normal leading-7">
                Get the most natural sounding voices. It is like somebody else
                is reading for you. Our Pro voices even support voice styles.
            </p>
        </template>
        <template v-else>
            <h4
                className="sm:text-[20px] text-[16px] font-semibold leading-7 mb-[2rem]"
            >
                Longer Voiceovers
            </h4>
            <p className="sm:text-[16px] text-[12px] font-normal leading-7">
                TTransform up to 12k characters into voiceover in single click.
                Moreover you can merge multiple files for even longer content.
            </p>
        </template>
    </div>
</template>

<script>
export default {
    name: "magicCard",
    props: {
        magicId: "",
    },
    setup() {},
};
</script>
