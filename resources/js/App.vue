<template>
    <div className="w-screen min-h-screen bg-[#f8fafc] ">
        <Navbar />
        <Content />
    </div>
</template>

<script>
import Navbar from "./pages/Navbar.vue";
import Content from "./pages/Content.vue";

export default {
    name: "app",
    components: {
        Navbar,
        Content,
    },
    setup() {},
};
</script>

<style></style>
