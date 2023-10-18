<template>
    <div className="flex items-center justify-center flex-col w-full py-[5vh]">
        <h2 className="text-[32px] font-bold mb-[7vh] text-center">
            Your Audio File is Ready
        </h2>
        <audio className="w-full mb-[7vh]" controls name="media">
            <source :src="audio" type="audio/mpeg" />
        </audio>
        <a
            className="h-[7vh] w-[30%] bg-[#0C8CE9] rounded-lg text-[14px]
            text-[#ffffff] leading-5 not-italic font-medium mb-[7vh]"
            :href="audio"
            download="audio.mp3"
        >
            <button className="w-[100%] h-[100%]">Download</button></a
        >
        <!-- <button
            className="h-[7vh] w-[100%] bg-[#0C8CE9] rounded-lg text-[14px]
            text-[#ffffff] leading-5 not-italic font-medium mb-[7vh]"
            @click="downloadAudio"
        >
            Download
        </button> -->
    </div>
</template>

<script>
import { computed, ref } from "vue";
// import download from "download";
export default {
    name: "audioPanel",
    props: {
        audio: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        // function downloadAudio() {
        //     download(props.audio)
        //         .then(() => {
        //             console.log("Audio file downloaded successfully");
        //         })
        //         .catch((err) => {
        //             console.error("Error downloading audio file:", error);
        //         });
        // }
        // return {
        //     downloadAudio,
        // };
    },
};
</script>
