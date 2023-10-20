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
                    v-for="(data, index) in datas"
                    :key="index"
                    :value="data.friendly"
                >
                    {{ data.friendly }}
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
            <Loading :isLoading="isLoading" />
        </form>
        <div className="w-full" v-if="audioURL?.length > 0">
            <AudioPanel :audio="audioURL" />
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import axios from "axios";
import AudioPanel from "../pages/AudioPanel.vue";
import Loading from "./Loading.vue";
export default {
    name: "mainForm",
    components: {
        AudioPanel,
        Loading,
    },
    props: {
        languages: {
            type: Array,
            default: [],
        },
        datas: {
            type: Array,
            default: [],
        },
    },
    setup(props, { emit }) {
        // console.log(props.datas);
        const data = {
            character: props.datas[0].friendly,
            text: "",
        };
        const requestData = {
            text: "",
            voice: "",
            rate: 20,
            volume: -50,
        };
        const audioURL = ref("");

        const isLoading = ref(false);

        let SERVER_URL = import.meta.env.VITE_APP_URL;
        let SERVER_PORT = import.meta.env.VITE_APP_PORT;

        function getCharacter(character) {
            // console.log(character);
            data.character = character;
        }

        function getLanguage(language) {
            // console.log(language);
            emit("setLanguage", language);
        }

        // let friendly = ref(props.datas[0].friendly);
        // watch(friendly, (value) => {
        //     data.character = value;
        // });

        function getText(text) {
            data.text = text;
        }

        function doSubmit(e) {
            e.preventDefault();
            audioURL.value = "";
            getRequestData();
            if (requestData.voice && requestData.text) {
                isLoading.value = true;
                axios
                    .post("api/tts", requestData)
                    .then((res) => {
                        audioURL.value = `${SERVER_URL}/audio/${res.data.audioURL}`;
                        if (audioURL.value.length > 0) {
                            isLoading.value = false;
                            window.scrollBy(0, 500);
                        }

                        // console.log(audioURL.value);
                    })
                    .catch((err) => console.log(err));
            }
        }

        function getRequestData() {
            // console.log(props.datas);

            const currentData = props.datas.filter((voiceData, index) => {
                // console.log(voiceData.friendly + " " + data.character);
                return voiceData.friendly === data.character;
            });
            // console.log(currentData[0]);
            if (currentData[0] !== undefined) {
                requestData.voice = currentData[0].voice;
            } else {
                requestData.voice = props.datas[0].voice;
            }

            requestData.text = data.text;
        }

        return {
            getLanguage,
            getCharacter,
            getText,
            doSubmit,
            getRequestData,
            audioURL,
            isLoading,
        };
    },
};
</script>
