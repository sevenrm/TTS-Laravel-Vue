<template>
    <div
        className="flex items-center m-[2vh] bg-[#F1F5F9] sm:w-[25vw] w-[50vw] h-[5em] rounded-[14px] pl-[1vw]"
    >
        <button
            className="w-[3em] h-[3em] mr-[1vw] bg-[url('assets/svg/new.svg')] bg-cover bg-no-repeat"
        ></button>
        <p className="text-[16px] font-medium text-center">{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: "voiceCard",
    props: {
        name: "",
    },
    setup() {},
};
</script>
