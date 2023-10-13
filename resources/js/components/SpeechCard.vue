<template>
    <div
        className="flex justify-center items-center flex-col m-[2vh] bg-white w-[25vw] h-[25vh] rounded-[14px] px-[2vw]"
    >
        <template v-if="stepId === '1'">
            <h4
                className="text-[#0C8CE9] text-[16px] font-semibold text-center leading-4 mb-[4vh]"
            >
                STEP 1
            </h4>
            <p className="text-[16px] font-normal text-center leading-[28px]">
                Type or Paste your text. Crikk can only put 1000 characters into
                voiceover at once.
            </p>
        </template>
        <template v-else-if="stepId === '2'">
            <h4
                className="text-[#0C8CE9] text-[16px] font-semibold text-center leading-4 mb-[4vh]"
            >
                STEP 2
            </h4>
            <p className="text-[16px] font-normal text-center leading-[28px]">
                Choose the voiceover, you can listen to default samples to
                choose the perfect voiceover.
            </p>
        </template>
        <template v-else>
            <h4
                className="text-[#0C8CE9] text-[16px] font-semibold text-center leading-4 mb-[4vh]"
            >
                STEP 3
            </h4>
            <p className="text-[16px] font-normal text-center leading-[28px]">
                Click on the Generate button. It will transform your text into
                voiceover in a few seconds.
            </p>
        </template>
    </div>
</template>

<script>
export default {
    name: "speechCard",
    props: {
        stepId: "",
    },
    setup() {},
};
</script>
