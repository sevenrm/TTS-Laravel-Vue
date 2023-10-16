<template>
    <div className="flex items-center justify-center flex-col w-full py-[5vh]">
        <h2 className="text-[32px] font-bold mb-[7vh] text-center">
            Your Audio File is Ready
        </h2>
        <audio className="w-full mb-[7vh]" controls></audio>
        <button
            className="h-[7vh] w-[30%] bg-[#0C8CE9] rounded-lg text-[14px] text-[#ffffff] leading-5 not-italic font-medium mb-[7vh]"
            @click="submit"
        >
            Download
        </button>
    </div>
</template>

<script>
export default {
    name: "audioPanel",
    setup(props) {
        // console.log(props.characters);
    },
};
</script>
