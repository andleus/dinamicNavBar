<script setup>
import { onMounted, ref } from 'vue';
	import { getTasks } from '../services/task.services.js';
	

	const tasks = ref([]);


	onMounted( async () => {


        setTimeout( async () => {
            tasks.value = await getTasks();
        }, 5000);


		
	})

</script>


<template>
    <main class="home-pah">
        <h1>Home</h1>
        <p>This is home page</p>
        <div v-for="task in tasks" :key="task.id">
            <div style="padding: 5px">
                {{ task.title }}
                {{ task.description }}
            </div>
        </div>
    </main>
</template>