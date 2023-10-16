<template>
    <div className="flex w-full bg-[#0C8CE9]">
        <div
            className="flex justify-center sm:items-start items-center  flex-col xl:w-[50%] w-[100%] px-[7vw] py-[3vw]"
        >
            <h2
                className="text-white sm:text-[32px] text-[24px] sm:text-left text-center font-bold mb-[2vw]"
            >
                Download our mobile app
            </h2>
            <p
                className="text-white sm:text-[16px] text-[12px] sm:text-left text-center font-medium leading-[22px] mb-[3vw]"
            >
                Our Mobile offers more features and is free available on both
                play and app store.
            </p>
            <div
                class="flex mb-[3vw] sm:flex-row flex-col sm:items-start items-center"
            >
                <button
                    className="w-[10em] h-[2.89em] mr-[1vw] lg:mb-0 mb-[0.5em] bg-[url('assets/svg/Group.svg')] bg-cover bg-no-repeat"
                ></button>
                <button
                    className="w-[10em] h-[2.89em] mr-[1vw] bg-[url('assets/svg/Group-1.svg')] bg-cover bg-no-repeat"
                ></button>
            </div>
        </div>
        <div
            className="xl:w-[50%] w-[0%] bg-[url('assets/img/Frame.png')] bg-cover bg-no-repeat"
        >
            <!-- <div
                className=" ml-[25%] flex justify-center items-center w-[60%] h-[100%]"
            >
                <div
                    className=" w-[30%] h-[16vw] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mr-[3%]"
                ></div>
                <div
                    className="h-[100%] w-[50%] relative overflow-hidden mr-[3%]"
                >
                    <div
                        className=" absolute bottom-[50%] w-[30%] h-[60%] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mb-[5%]"
                    ></div>
                    <div
                        className=" absolute top-[50%] w-[30%] h-[60%] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mt-[5%]"
                    ></div>
                </div>

                <div
                    className=" w-[30%] h-[16vw] bg-[url('assets/img/Mobile.png')] bg-cover bg-no-repeat mr-[3%]"
                ></div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "mobilePanel",
    setup() {},
};
</script>
