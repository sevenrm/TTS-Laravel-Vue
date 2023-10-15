<template>
    <form
        className="flex flex-col w-[60vw] h-[40vw] bg-white my-[5vh] py-[3%] px-[2%] shrink-0 rounded-md"
    >
        <label className="text-[14px] font-normal mb-[2%]">Language</label>
        <select
            className=" w-full h-[10%] mb-[3%] border border-[##DDE1EB] rounded-lg pl-[3%] pr-[3%] text-[#23262A] text-[16px] font-medium leading-5"
            placeholder="select language"
            @change="
                (e) => {
                    getLanguage(e.target.value);
                }
            "
        >
            <option
                v-for="(language, index) in languages"
                :key="index"
                :value="language"
            >
                {{ language }}
            </option>
        </select>
        <label className="text-[14px] font-normal mb-[2%]">Character</label>
        <select
            className="w-full h-[10%] mb-[3%] border border-[##DDE1EB] rounded-lg px-[3%] text-[#23262A] text-[16px] font-medium leading-5 invalid:text-[#B2BAC6]"
            placeholder="select character"
            @change="
                (e) => {
                    getCharacter(e.target.value);
                }
            "
        >
            <option disabled selected hidden>Select Character</option>
            <option
                v-for="(character, index) in characters"
                :key="index"
                :value="character"
            >
                {{ character }}
            </option>
            <!-- <option disabled selected hidden>Select Character</option> -->
        </select>
        <label className="text-[14px] font-normal mb-[2%]">Text</label>
        <textarea
            className="w-full h-[30%] border border-[##DDE1EB] rounded-lg px-[3%] py-[2%] text-[16px] font-medium leading-5 mb-[3%]"
            cols="3"
            placeholder="Enter text"
            @change="
                (e) => {
                    getText(e.target.value);
                }
            "
        ></textarea>
        <button
            className="h-[2.75rem] w-full bg-[#0C8CE9] rounded-lg text-[14px] text-[#ffffff] leading-5 not-italic font-medium font-['SF Pro Text']"
            @click="submit"
        >
            Download
        </button>
    </form>
</template>

<script>
import { computed, ref } from "vue";
export default {
    name: "mainForm",
    props: {
        languages: {
            type: Array,
            default: [],
        },
        characters: {
            type: Object,
            default: {},
        },
    },
    setup(props, { emit }) {
        // console.log(props.characters);
        const data = {};

        function getCharacter(character) {
            console.log(character);
            data.character = character;
        }

        function getLanguage(language) {
            // console.log(language);
            emit("setLanguage", language);
            data.language = language;
        }

        function getText(text) {
            console.log(text);
            data.text = text;
        }

        const submit = computed(() => {
            // console.log(characters.value);
            console.log(data);
        });

        return {
            getLanguage,
            getCharacter,
            getText,
            submit,
        };
    },
};
</script>
