<template>
    <div
        className="flex items-center m-[2vh] bg-[#F1F5F9] w-[25vw] h-[10vh] rounded-[14px] pl-[1vw]"
    >
        <button
            className="w-[3vw] h-[3vw] mr-[1vw] bg-[url('assets/svg/new.svg')] bg-cover bg-no-repeat"
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
