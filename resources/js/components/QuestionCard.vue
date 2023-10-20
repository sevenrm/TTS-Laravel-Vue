<template>
    <div className="flex justify-center flex-col m-[2vh] w-full px-[2vw]">
        <template v-if="isToggle">
            <div className="flex items-center w-full">
                <div className="w-[90%]">
                    <h4
                        className="text-[22px] text-[#0C8CE9] font-medium leading-7 mb-[1vh]"
                    >
                        {{ question }}
                    </h4>
                </div>
                <button
                    className="w-[10px] h-[1px] mr-[1vw] bg-[url('assets/svg/button1.svg')] bg-cover bg-no-repeat"
                    @click="offToggle"
                ></button>
            </div>

            <p
                className="text-[18px] text-[#6F6C90] font-normal leading-[30px] mb-[4vh]"
            >
                {{ answer }}
            </p>
            <div className="w-full bg-[#D9DBE9] h-[1px]"></div>
        </template>
        <template v-else>
            <div className="flex items-center w-full mb-[5vh]">
                <div className="w-[90%]">
                    <h4
                        className="text-[22px] text-[#170F49] font-medium leading-7"
                    >
                        {{ question }}
                    </h4>
                </div>
                <button
                    className="w-[10px] h-[10px] mr-[1vw] bg-[url('assets/svg/button2.svg')] bg-cover bg-no-repeat"
                    @click="onToggle"
                ></button>
            </div>
            <div className="w-full bg-[#D9DBE9] h-[1px]"></div>
        </template>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "questionCard",
    props: {
        question: {
            type: String,
            default: "",
        },
        answer: {
            type: String,
            default: "",
        },
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        let isToggle = ref(props.isOpen);
        function offToggle() {
            isToggle.value = false;
        }
        function onToggle() {
            isToggle.value = true;
        }
        return {
            isToggle,
            offToggle,
            onToggle,
        };
    },
};
</script>
