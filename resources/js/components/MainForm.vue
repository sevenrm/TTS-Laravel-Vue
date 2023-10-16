<template>
    <div
        class="lg:w-[65%] w-[80%] flex flex-col justify-center items-center box-border"
    >
        <h1
            className="text-[#000] text-[40px] text-center font-extrabold mb-[2vh]"
        >
            Free English Text to Speech 2023
        </h1>
        <p className="text-[#000] text-[20px] text-center font-normal mb-[2vh]">
            Use our free English text to speech platform to transform your
            English text into a realistic voice.
        </p>
        <form
            className="flex flex-col w-full bg-white my-[5vh] py-[3%] px-[2%] shrink-0 rounded-md"
            action="#"
        >
            <label className="text-[14px] font-normal mb-[2%]" for="language"
                >Language</label
            >
            <select
                className=" w-full h-[3rem] mb-[3%] border border-[##DDE1EB] rounded-lg pl-[3%] pr-[3%] text-[#23262A] text-[16px] font-medium leading-5"
                placeholder="select language"
                id="language"
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
            <label className="text-[14px] font-normal mb-[2vh]" for="character"
                >Character</label
            >
            <select
                className="w-full h-[3rem] mb-[3vh] border border-[##DDE1EB] rounded-lg px-[3%] text-[#23262A] text-[16px] font-medium leading-5 invalid:text-[#B2BAC6]"
                placeholder="select character"
                id="character"
                @change="
                    (e) => {
                        getCharacter(e.target.value);
                    }
                "
            >
                <option
                    v-for="(character, index) in characters"
                    :key="index"
                    :value="character"
                >
                    {{ character }}
                </option>
                <!-- <option disabled selected hidden>Select Character</option> -->
            </select>
            <label className="text-[14px] font-normal mb-[2vh]" for="text"
                >Text</label
            >
            <textarea
                className="w-full h-[9rem] border border-[##DDE1EB] rounded-lg px-[3%] py-[2%] text-[16px] font-medium leading-5 mb-[3%]"
                cols="3"
                placeholder="Enter text"
                id="text"
                @change="
                    (e) => {
                        getText(e.target.value);
                    }
                "
            ></textarea>
            <input
                type="submit"
                value="Generate"
                className="h-[3rem] w-full bg-[#0C8CE9] rounded-lg text-[14px] text-[#ffffff] leading-5 not-italic font-medium font-['SF Pro Text']"
                @click="doSubmit"
            />
        </form>
        <div className="w-full" v-show="isSuccess">
            <AudioPanel />
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";
import AudioPanel from "../pages/AudioPanel.vue";
export default {
    name: "mainForm",
    components: {
        AudioPanel,
    },
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
        const isSuccess = ref(false);

        function getCharacter(character) {
            // console.log(character);
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

        function doSubmit(e) {
            e.preventDefault();
            // console.log("submit");
            isSuccess.value = true;

            // console.log(isSuccess.value);
        }

        return {
            getLanguage,
            getCharacter,
            getText,
            doSubmit,
            isSuccess,
        };
    },
};
</script>
