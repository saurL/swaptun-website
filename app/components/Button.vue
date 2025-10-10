<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :disabled="!href ? disabled : undefined"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  block?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  type: "button",
  block: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event);
  }
};

const buttonClasses = computed(() => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E87A3A] focus:ring-offset-2";

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl",
    xl: "px-10 py-4 text-lg rounded-xl",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#E87A3A] to-[#CB5520] text-white shadow-lg hover:shadow-xl hover:from-[#FF985C] hover:to-[#E87A3A] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-[#E87A3A] disabled:hover:to-[#CB5520] disabled:hover:shadow-lg",
    secondary:
      "bg-[#F4C9A6] text-[#2E2E2E] shadow-md hover:shadow-lg hover:bg-[#FF985C] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "text-[#E87A3A] hover:bg-orange-50 hover:text-[#CB5520] disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-[#E87A3A] text-[#E87A3A] hover:bg-[#E87A3A] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const blockClass = props.block ? "w-full" : "";

  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    blockClass,
  ].join(" ");
});
</script>
