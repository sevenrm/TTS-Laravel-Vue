<template>
    <div
        className="flex items-center bg-white justify-center flex-col w-full py-[5vh] px-[7vw]"
    >
        <h2 className="text-[32px] font-bold mb-[3vh]">
            Unlock the Magic of Voice with Crikk
        </h2>
        <p
            className="text-[18px] font-normal leading-7 mb-[3vh] w-[60vw] text-center"
        >
            With Crikk, turn text into talk. Bring your books, documents, and
            images to life. Simple, fast, and tailored for you. Experience
            reading, reimagined.
        </p>
        <div className="flex items-center justify-center flex-wrap">
            <MagicCard magicId="1" />
            <MagicCard magicId="2" />
            <MagicCard magicId="3" />
            <MagicCard magicId="4" />
        </div>
    </div>
</template>

<script>
import MagicCard from "../components/MagicCard.vue";
export default {
    name: "magicPanel",
    components: {
        MagicCard,
    },
    setup() {},
};
</script>
