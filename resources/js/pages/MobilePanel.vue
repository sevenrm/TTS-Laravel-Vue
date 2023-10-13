<template>
    <div className="flex w-full h-[40vh] bg-[#0C8CE9]">
        <div
            className="flex justify-center flex-col w-[50%] px-[10vw] py-[5vh]"
        >
            <h2 className="text-white text-[32px] font-bold mb-[3vh]">
                Download our mobile app
            </h2>
            <p
                className="text-white text-[16px] font-medium leading-[17px] mb-[5vh]"
            >
                Our Mobile offers more features and is free available on both
                play and app store.
            </p>
            <div class="flex mb-[3vh]">
                <button
                    className="w-[13vw] h-[3.8vw] mr-[1vw] bg-[url('assets/svg/Group.svg')] bg-cover bg-no-repeat"
                ></button>
                <button
                    className="w-[13vw] h-[3.8vw] mr-[1vw] bg-[url('assets/svg/Group-1.svg')] bg-cover bg-no-repeat"
                ></button>
            </div>
        </div>
        <div
            className="w-[50%]  bg-[url('assets/svg/surfix.svg')] bg-cover bg-no-repeat"
        >
            <div
                className=" ml-[25%] flex justify-center items-center w-[60%] h-[100%]"
            >
                <div
                    className=" w-[15vh] h-[30vh] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mr-[3%]"
                ></div>
                <div
                    className="h-[100%] w-[15vh] relative overflow-hidden mr-[3%]"
                >
                    <div
                        className=" absolute bottom-[50%] w-[15vh] h-[30vh] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mb-[5%]"
                    ></div>
                    <div
                        className=" absolute top-[50%] w-[15vh] h-[30vh] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mt-[5%]"
                    ></div>
                </div>

                <div
                    className=" w-[15vh] h-[30vh] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mr-[3%]"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "mobilePanel",
    setup() {},
};
</script>
