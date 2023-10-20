<template>
    <div
        className="flex flex-col items-center sm:w-[55%] w-[90%] my-[5vh] px-[2%] shrink-0 rounded-md"
    >
        <h2 className="text-[32px] font-bold mb-[3vh] text-center">
            Frequently asked questions
        </h2>
        <QuestionCard
            question="Is this text to speech free?"
            answer="Yes, It's free"
            :isOpen="true"
        />
        <QuestionCard
            question="What is the output format?"
            answer="MP3 file format"
        />
        <QuestionCard
            question="How many languages does text-to-speech work in?"
            answer="30 languages"
        />
        <QuestionCard
            question="Can I use generated files for commercial purposes?"
            answer="Yes, you can."
        />
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
