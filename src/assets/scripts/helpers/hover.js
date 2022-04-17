import { onMounted, onUnmounted, ref } from 'vue'
import debounce from './debounce'

export function useHover (target) {
  const hovering = ref(false)

  const enterHandler = () => (hovering.value = true)
  const leaveHandler = () => (hovering.value = false)

  onMounted(() => {
    if (!target.value) return
    target.value.addEventListener('mouseenter', () => debounce(enterHandler, 500))
    target.value.addEventListener('mouseleave', () => debounce(leaveHandler, 500))
  })

  onUnmounted(() => {
    if (!target.value) return
    target.value.removeEventListener('mouseenter', enterHandler)
    target.value.removeEventListener('mouseleave', leaveHandler)
  })

  return hovering
}
