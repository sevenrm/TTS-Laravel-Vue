<template>
    <div
        className="flex items-center justify-center flex-col w-full py-[5vh] px-[7vw]"
    >
        <h2 className="text-[32px] font-bold mb-[3vh] text-center">
            How to Generate text to speech in English
        </h2>
        <div className="flex items-center justify-center flex-wrap">
            <SpeechCard stepId="1" />
            <SpeechCard stepId="2" />
            <SpeechCard stepId="3" />
        </div>
    </div>
</template>

<script>
import SpeechCard from "../components/SpeechCard.vue";
export default {
    name: "speechPanel",
    components: {
        SpeechCard,
    },
    setup() {},
};
</script>
