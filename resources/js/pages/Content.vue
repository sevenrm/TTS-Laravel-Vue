<template>
    <div className="w-full flex justify-center flex-col items-center mt-[10vh]">
        <MainForm
            :languages="getLanguages"
            @setLanguage="getDatas"
            :datas="setDatas"
        />
        <VoicePanel :datas="setDatas" />
        <SpeechPanel />
        <MagicPanel />
        <MobilePanel />
        <QuestionPanel />
    </div>
</template>

<script>
import { computed, ref } from "vue";

import MainForm from "../components/MainForm.vue";
import VoicePanel from "./VoicePanel.vue";
import SpeechPanel from "./SpeechPanel.vue";
import MagicPanel from "./MagicPanel.vue";
import MobilePanel from "./MobilePanel.vue";
import QuestionPanel from "./QuestionPanel.vue";
import voiceData from "../data.json";
export default {
    name: "content",
    components: {
        MainForm,
        VoicePanel,
        SpeechPanel,
        MagicPanel,
        MobilePanel,
        QuestionPanel,
    },
    setup() {
        let firstData = [];

        firstData = [...voiceData[0].details];

        let datas = ref(firstData);

        const getLanguages = computed(() => {
            let languages = [];
            for (let voice of voiceData) {
                languages.push(voice.language);
            }
            return languages;
        });

        function getDatas(language) {
            const voice = voiceData.filter((voice, index) => {
                return voice.language === language;
            });
            // console.log(voice[0].details);
            datas.value = [...voice[0].details];
        }

        const setDatas = computed(() => {
            // console.log(datas.value);
            return datas.value;
        });

        return {
            getLanguages,
            getDatas,
            setDatas,
        };
    },
};
</script>
