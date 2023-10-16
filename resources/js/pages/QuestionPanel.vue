<template>
    <div
        className="flex flex-col items-center sm:w-[55%] w-[90%] my-[5vh] px-[2%] shrink-0 rounded-md"
    >
        <h2 className="text-[32px] font-bold mb-[3vh] text-center">
            Frequently asked questions
        </h2>
        <QuestionCard questionId="1" />
        <QuestionCard questionId="2" />
        <QuestionCard questionId="3" />
        <QuestionCard questionId="4" />
    </div>
</template>

<script>
import QuestionCard from "../components/QuestionCard.vue";
export default {
    name: "questionPanel",
    components: {
        QuestionCard,
    },
    setup() {},
};
</script>
