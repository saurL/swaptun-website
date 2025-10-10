<template>
  <div class="bg-white min-h-screen flex items-center justify-center px-6">
    <div class="w-full max-w-md">
      <!-- Logo / Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-[#CB5520] mb-2">Reset Password</h1>
        <p class="text-[#7D7D7D]">Enter your new password below</p>
      </div>

      <!-- Success Message -->
      <div
        v-if="success"
        class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
      >
        <div class="flex items-start">
          <span class="text-2xl mr-3">✓</span>
          <div>
            <h3 class="font-semibold text-[#27AE60] mb-1">
              Password Reset Successful
            </h3>
            <p class="text-sm text-[#27AE60]">
              Your password has been updated. You can now log in with your new
              password.
            </p>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div
        v-if="error"
        class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
      >
        <div class="flex items-start">
          <span class="text-2xl mr-3">✗</span>
          <div>
            <h3 class="font-semibold text-[#E74C3C] mb-1">Error</h3>
            <p class="text-sm text-[#E74C3C]">{{ error }}</p>
          </div>
        </div>
      </div>

      <!-- Form -->
      <form v-if="!success" @submit.prevent="handleSubmit" class="space-y-6">
        <div
          class="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-6 border border-orange-200/50 shadow-sm"
        >
          <!-- New Password Input -->
          <div class="mb-6">
            <label
              for="password"
              class="block text-sm font-semibold text-[#2E2E2E] mb-2"
            >
              New Password
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              minlength="8"
              class="w-full px-4 py-3 rounded-xl border border-orange-200/50 bg-white text-[#2E2E2E] placeholder-[#7D7D7D] focus:outline-none focus:ring-2 focus:ring-[#E87A3A] focus:border-transparent transition-all"
              placeholder="Enter your new password"
            />
            <p class="mt-2 text-xs text-[#7D7D7D]">
              Minimum 8 characters
            </p>
          </div>

          <!-- Confirm Password Input -->
          <div>
            <label
              for="confirmPassword"
              class="block text-sm font-semibold text-[#2E2E2E] mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              minlength="8"
              class="w-full px-4 py-3 rounded-xl border border-orange-200/50 bg-white text-[#2E2E2E] placeholder-[#7D7D7D] focus:outline-none focus:ring-2 focus:ring-[#E87A3A] focus:border-transparent transition-all"
              placeholder="Confirm your new password"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <Button
          type="submit"
          :disabled="loading || !password || !confirmPassword"
          block
          size="md"
        >
          <span v-if="loading">Resetting Password...</span>
          <span v-else>Reset Password</span>
        </Button>
      </form>

      <!-- Back to Login Link -->
      <div v-if="success" class="mt-6 text-center">
        <a
          href="#"
          class="text-[#E87A3A] hover:text-[#CB5520] font-semibold transition-colors"
        >
          Back to Login
        </a>
      </div>

      <!-- Invalid Token -->
      <div
        v-if="!token && !loading"
        class="bg-red-50 border border-red-200 rounded-xl p-6 text-center"
      >
        <span class="text-4xl mb-4 block">⚠️</span>
        <h3 class="font-semibold text-[#E74C3C] mb-2">Invalid Reset Link</h3>
        <p class="text-sm text-[#7D7D7D] mb-4">
          This password reset link is invalid or has expired. Please request a
          new password reset email.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const token = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");
const loading = ref<boolean>(false);
const error = ref<string>("");
const success = ref<boolean>(false);

useHead({
  title: 'Reset Password - Swaptun',
  meta: [
    { name: 'description', content: 'Reset your Swaptun account password securely.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

onMounted(() => {
  // Extract token from query parameter
  token.value = (route.query.token as string) || "";
});

const handleSubmit = async () => {
  // Clear previous errors
  error.value = "";

  // Validation
  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match";
    return;
  }

  if (password.value.length < 8) {
    error.value = "Password must be at least 8 characters long";
    return;
  }

  if (!token.value) {
    error.value = "Invalid or missing reset token";
    return;
  }

  // Start loading
  loading.value = true;

  try {
    // Call API to reset password
    const response = await fetch("https://api.swaptun.com/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token.value,
        newPassword: password.value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Failed to reset password. Please try again."
      );
    }

    // Success
    success.value = true;
    password.value = "";
    confirmPassword.value = "";
  } catch (err: any) {
    error.value = err.message || "An unexpected error occurred";
  } finally {
    loading.value = false;
  }
};
</script>
