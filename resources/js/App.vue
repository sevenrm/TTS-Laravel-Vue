<template>
    <div className="w-[100%] min-h-screen bg-[#f8fafc] font-sf-pro">
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
