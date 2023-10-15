<template>
    <div className="w-full flex justify-center flex-col items-center mt-[10vh]">
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
        let firstCharacters = [];
        for (let character of voiceData[0].details) {
            firstCharacters.push(character.friendly);
        }
        let characters = ref(firstCharacters);

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
