<template>
    <div
        className="flex flex-col m-[2vh] bg-[#F6F6F6] w-[40vw] h-[30vh] rounded-[14px] px-[2vw] py-[5vh]"
    >
        <template v-if="magicId === '1'">
            <h4 className="text-[20px] font-semibold leading-4 mb-[4vh]">
                Transform Anything into Video
            </h4>
            <p className="text-[16px] font-normal leading-7">
                Transform your physical books, PDF or images into a natural
                sounding voices in seconds that you can listen for hours.
            </p>
        </template>
        <template v-else-if="magicId === '2'">
            <h4 className="text-[20px] font-semibold leading-4 mb-[4vh]">
                Text Reader to increase your retention
            </h4>
            <p className="text-[16px] font-normal leading-7">
                In Crikk, sentences and words are highlighted as it reads,
                making it convenient for users to follow along while listening.
                So you can memorise more.
            </p>
        </template>
        <template v-else-if="magicId === '3'">
            <h4 className="text-[20px] font-semibold leading-4 mb-[4vh]">
                Unlock All voices
            </h4>
            <p className="text-[16px] font-normal leading-7">
                Get the most natural sounding voices. It is like somebody else
                is reading for you. Our Pro voices even support voice styles.
            </p>
        </template>
        <template v-else>
            <h4 className="text-[20px] font-semibold leading-4 mb-[4vh]">
                Longer Voiceovers
            </h4>
            <p className="text-[16px] font-normal leading-7">
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
