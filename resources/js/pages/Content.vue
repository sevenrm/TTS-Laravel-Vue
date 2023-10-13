<template>
    <div className="flex justify-center flex-col items-center mt-[10vh]">
        <h1 className="text-[#000] text-[40px] font-extrabold">
            Free English Text to Speech 2023
        </h1>
        <p className="text-[#000] text-[20px] font-normal">
            Use our free English text to speech platform to transform your
            English text into a realistic voice.
        </p>
        <MainForm
            :languages="getLanguages"
            @setLanguage="getCharacters"
            :characters="setCharacters"
        />
        <VoicePanel :characters="setCharacters" />
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
        let characters = ref([]);

        const getLanguages = computed(() => {
            let languages = [];
            for (let voice of voiceData) {
                languages.push(voice.language);
            }
            return languages;
        });

        function getCharacters(language) {
            // console.log("lang", language);
            const voice = voiceData.filter((voice, index) => {
                return voice.language === language;
            });
            let new_characters = [];
            const voiceDetails = [...voice[0].details];
            voiceDetails.forEach((value, index) =>
                new_characters.push(value.friendly)
            );
            // console.log(new_characters);
            characters.value = new_characters;
            // console.log(characters.value);
        }

        const setCharacters = computed(() => {
            // console.log(characters.value);
            return characters.value;
        });

        return {
            getLanguages,
            getCharacters,
            setCharacters,
        };
    },
};
</script>
