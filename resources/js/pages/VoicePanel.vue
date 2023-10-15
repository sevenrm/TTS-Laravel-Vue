<template>
    <div
        className="flex items-center justify-center flex-col w-full bg-white py-[5vh] px-[7vw]"
    >
        <h2 className="text-[32px] font-bold mb-[3vh]">Voice Samples</h2>
        <div className="flex items-center justify-center flex-wrap">
            <VoiceCard
                v-for="(character, index) in characters"
                :key="index"
                :name="character"
            />
        </div>
    </div>
</template>

<script>
import VoiceCard from "../components/VoiceCard.vue";
export default {
    name: "voicePanel",
    props: {
        characters: {
            type: Object,
            default: {},
        },
    },
    components: {
        VoiceCard,
    },
    setup(props) {
        // console.log(props.characters);
    },
};
</script>
