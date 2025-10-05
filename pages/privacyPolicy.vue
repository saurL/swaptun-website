<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-orange-50 to-white py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-[#2E2E2E] sm:text-5xl"
          >
            Privacy Policy
          </h1>
          <p class="mt-6 text-lg leading-8 text-[#7D7D7D]">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <p class="mt-4 text-sm text-[#7D7D7D]">
            Last updated:
            {{
              new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <!-- Summary -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">Summary</h2>
        <div class="bg-[#FFF8F3] rounded-2xl p-8 border border-orange-200/50">
          <p class="text-[#2E2E2E] leading-7">
            Swaptun is a playlist transfer service that helps you share music
            between streaming platforms. We only collect the minimum information
            necessary to provide our service: your email, username, and the
            playlist data you choose to transfer. We never store your passwords
            or sensitive information.
          </p>
        </div>
      </section>

      <!-- Information We Collect -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          1. Information We Collect
        </h2>

        <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
          Personal Information
        </h3>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          When you use Swaptun, we collect:
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              ><strong class="text-[#2E2E2E]">Email address</strong> - for
              account creation and communication</span
            >
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              ><strong class="text-[#2E2E2E]">Username</strong> - to identify
              your account</span
            >
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              ><strong class="text-[#2E2E2E]">Playlist data</strong> - only the
              playlists you choose to transfer</span
            >
          </li>
        </ul>

        <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
          Social Media Login
        </h3>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          If you choose to connect via social media (Spotify, Apple Music,
          etc.), we receive basic profile information from that platform. We
          only use this to facilitate the playlist transfer.
        </p>
      </section>

      <!-- How We Use Your Information -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          2. How We Use Your Information
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">We use your information to:</p>
        <div class="grid gap-4">
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">🔄</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                Transfer Playlists
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                Process and transfer your music playlists between platforms
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">👤</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                Manage Your Account
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                Create and maintain your user account
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">🛡️</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                Security & Fraud Prevention
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                Protect your account and prevent unauthorized access
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">📧</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">Communication</h4>
              <p class="text-sm text-[#7D7D7D]">
                Send important updates about our service
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Data Sharing -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          3. How We Share Your Information
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          We do not sell your personal information. We only share data when:
        </p>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              >You explicitly authorize the transfer to a streaming
              platform</span
            >
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              >Required by law or to protect our legal rights</span
            >
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              >With service providers who help us operate (under strict
              confidentiality agreements)</span
            >
          </li>
        </ul>
      </section>

      <!-- Data Security -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">4. Data Security</h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          We implement industry-standard security measures to protect your
          information:
        </p>
        <div
          class="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-8 border border-orange-200/50"
        >
          <ul class="space-y-4">
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]"
                >Encrypted data transmission (HTTPS/TLS)</span
              >
            </li>
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]"
                >Secure password storage (hashed and salted)</span
              >
            </li>
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]"
                >Regular security audits and updates</span
              >
            </li>
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]"
                >Limited access to personal data</span
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Your Rights -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          5. Your Privacy Rights
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">You have the right to:</p>
        <div class="space-y-4">
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">Access Your Data</h4>
            <p class="text-[#7D7D7D] text-sm">
              Request a copy of all personal information we hold about you
            </p>
          </div>
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">Correct Your Data</h4>
            <p class="text-[#7D7D7D] text-sm">
              Update or correct any inaccurate information
            </p>
          </div>
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">Delete Your Data</h4>
            <p class="text-[#7D7D7D] text-sm">
              Request deletion of your account and all associated data
            </p>
          </div>
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">Export Your Data</h4>
            <p class="text-[#7D7D7D] text-sm">
              Download your data in a portable format
            </p>
          </div>
        </div>
      </section>

      <!-- Cookies -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          6. Cookies and Tracking
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          We use essential cookies to:
        </p>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              >Keep you logged in to your account</span
            >
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">Remember your preferences</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              >Ensure the security of your session</span
            >
          </li>
        </ul>
        <p class="text-[#7D7D7D] leading-7">
          You can manage cookie preferences in your browser settings.
        </p>
      </section>

      <!-- Data Retention -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          7. Data Retention
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          We retain your personal information only as long as necessary to
          provide our services. When you delete your account, we remove all your
          personal data within 30 days, except where we're required by law to
          retain it longer (e.g., for tax or legal purposes).
        </p>
      </section>

      <!-- Children's Privacy -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          8. Children's Privacy
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          Swaptun is not intended for users under 13 years of age. We do not
          knowingly collect information from children. If you believe we have
          collected information from a child, please contact us immediately.
        </p>
      </section>

      <!-- Changes to Policy -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          9. Changes to This Policy
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          We may update this Privacy Policy from time to time. We'll notify you
          of any material changes by email or through our app. Continued use of
          Swaptun after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <!-- Contact -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">10. Contact Us</h2>
        <div
          class="bg-gradient-to-br from-[#E87A3A] to-[#CB5520] rounded-2xl p-8 text-white"
        >
          <p class="text-lg mb-4">
            Questions about your privacy or this policy?
          </p>
          <p class="mb-6">We're here to help. Reach out to us:</p>
          <div class="space-y-3">
            <div class="flex items-center">
              <span class="mr-3">📧</span>
              <a
                href="mailto:contact@swaptun.com"
                class="hover:underline font-semibold"
              >
                contact@swaptun.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
