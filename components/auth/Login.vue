<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="col flex-center flex my-8" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <p class="description text-white">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block p-4 bg-red-700 text-white cursor-pointer"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>

</template>
