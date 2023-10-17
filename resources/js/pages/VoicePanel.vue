<template>
    <div
        className="flex items-center justify-center flex-col w-full bg-white py-[5vh] px-[7vw]"
    >
        <h2 className="text-[32px] font-bold mb-[3vh]">Voice Samples</h2>
        <div className="flex items-center justify-center flex-wrap">
            <VoiceCard
                v-for="(data, index) in datas"
                :key="index"
                :name="data.friendly"
            />
        </div>
    </div>
</template>

<script>
import VoiceCard from "../components/VoiceCard.vue";
export default {
    name: "voicePanel",
    props: {
        datas: {
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
