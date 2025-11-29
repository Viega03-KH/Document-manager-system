<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="w-full shadow-xl bg-white border-b">
            <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <img>
                <nav class="space-x-4">
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow flex items-center justify-center bg-gray-100 relative">
            <!-- Background Image -->
            <img :src="bgimg" alt="Login Background" class="absolute inset-0 w-full h-full object-cover opacity-70" />

            <div class="relative max-w-lg w-full bg-white rounded-xl shadow-lg p-8 z-10">
                <h2 class="text-2xl font-bold text-gray-600 mb-6 text-center">TIZIMGA KIRISH</h2>
                <form class="space-y-4">
                    <div class="mb-5">
                        <UInput label="Login" type="email" placeholder="Login kiriting" required />
                    </div>
                    <div class="mb-5">
                        <UInput label="Password" type="password" placeholder="Password kiriting" required />
                    </div>
                    <UButton customClass="w-full">KIRISH</UButton>
                </form>
            </div>
        </main>

        <!-- Footer -->
        <footer class="w-full bg-blue-800 py-4 shadow-lg">
            <div class="w-full h-px bg-white/50">
            </div>
            <div class="max-w-7xl mx-auto px-4 py-8 text-center text-white text-sm">
                <UBar />
            </div>
        </footer>
    </div>
</template>

<script setup>
import bgimg from '@/assets/dock-bg/login-bg1.41a044d52dd8cc433886.jpg'
import Logo from '@/assets/dock-logo/logo.c0287039.svg'
import UBar from '@/components/dock-ui/UBar.vue';
</script>