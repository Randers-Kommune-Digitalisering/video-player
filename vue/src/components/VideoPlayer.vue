<script setup>
import { ref, onMounted, onBeforeUnmount, defineExpose } from 'vue'
import videojs from 'video.js'
import '@/assets/video-js.min.css'

const props = defineProps({
	video: {
		type: String,
		required: true
	},
	loop: {
		type: Boolean,
		default: false
	}
})

const videoPlayer = ref({})
const videoOptions = ref({
	autoplay: false,
	controls: true,
	sources: [
		{
		src:
			'../videos/' + props.video,
			type: 'video/mp4'
		}
	]
})

onMounted(() => {
	videoPlayer.value = videojs(videoPlayer.value, videoOptions.value, function() {
		console.log('onPlayerReady', videoPlayer.value)
		if (props.loop)
			videoPlayer.value.loop(true)
	})

})

onBeforeUnmount(() => {
	if (videoPlayer.value) {
		videoPlayer.value.dispose()
	}
})

function playVideo()
{
  	videoPlayer.value.play()
}

defineExpose({
  	playVideo
})

</script>

<template>
	<div>
		<video ref="videoPlayer" class="video-js"></video>
	</div>
</template>

<style scoped>
	.video-js {
		width: 100vw;
		height: 100vh;
	}
</style>