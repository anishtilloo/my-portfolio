<script setup lang="ts">
import { ref } from "vue";
import { InputText, InputTextArea, TextButton } from "@elemento/ui";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: ""
});

function handleSubmit() {
  console.log("Form submitted:", form.value);
  // Process form submission here (API call, email service, etc.)
  // Reset the form after submission
  form.value = { name: "", email: "", subject: "", message: "" };
}
</script>

<template>
  <div class="container p-8 flex justify-between items-center">
    <!-- Right Column -->
    <div class="px-8 py-2 w-full">
      <section id="contact">
        <div class="mx-auto px-4">
          <div class="max-w-lg mx-auto dark:bg-black px-8 py-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Contact Me
            </h2>
            <form @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Three Inputs -->
                <div class="space-y-4">
                    <div>
                        <InputText label="Name" v-model="form.name" error="" name="Name" placeholder="Your Name" />
                    </div>
                    <div>
                        <InputText label="Email" v-model="form.email" error="" name="Email" placeholder="Your Email" />
                    </div>
                    <div>
                        <InputText label="Subject" v-model="form.subject" error="" name="Subject" placeholder="Your Subject" />
                    </div>
                </div>

                <!-- Textarea -->
                <div>
                    <InputTextArea id="message" label="Message" v-model="form.message" :rows="10" error="" name="Message" placeholder="Your Message" />
                </div>

                <!-- Button -->
                <div class="md:col-span-2">
                  <TextButton text="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>